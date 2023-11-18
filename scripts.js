// scripts.js

// Example JavaScript code for interactivity

// Function to change the background color of the body
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Event listener for a button click to change the background color
var changeColorButton = document.getElementById('changeColorButton');
if (changeColorButton) {
  changeColorButton.addEventListener('click', changeBackgroundColor);
}
