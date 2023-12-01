const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Renaming file with timestamp
  }
});
const upload = multer({ storage: storage });

// Endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).send('File uploaded successfully.');
  
  // Schedule deletion of the uploaded file after 24 hours
  setTimeout(() => {
    fs.unlink(`uploads/${req.file.filename}`, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully.');
      }
    });
  }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
