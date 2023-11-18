// Function to handle image upload
function uploadImage() {
  const fileInput = document.getElementById('fileInput');
  const imageFeed = document.getElementById('imageFeed');

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const img = document.createElement('img');
      img.src = reader.result;
      img.style.maxWidth = '100%';
      imageFeed.appendChild(img);
    };
  }
}
