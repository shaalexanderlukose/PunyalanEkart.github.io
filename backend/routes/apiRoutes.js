// backend/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const telegramController = require('../controllers/telegramController');

router.post('/telegram/message', (req, res) => {
  const message = req.body;
  telegramController.handleMessage(message);
  res.sendStatus(200);
});

module.exports = router;
