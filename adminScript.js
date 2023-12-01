// DOMContentLoaded event ensures the script runs after the HTML content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Your code here for handling admin interactions or specific functionalities
  // Example: Adding an event listener to an admin-only button
  const adminButton = document.getElementById('adminButton'); // Replace 'adminButton' with your admin button ID
  adminButton.addEventListener('click', () => {
    // Perform actions when the admin button is clicked
    // Example: Display a message for admin
    alert('Admin button clicked!'); // You can implement admin-specific actions here
  });

  // Other functions or event listeners for admin functionalities can be added here
});
