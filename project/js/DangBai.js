// Get the file input element and save button element
const fileInput = document.getElementById('myFileInput');
const saveButton = document.getElementById('saveButton');

// Add an event listener to the save button
saveButton.addEventListener('click', function() {
  // Check if a file is selected
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    // Read the contents of the file
    reader.onload = function(event) {
    const fileContent = event.target.result;

      // Store the file content in localStorage 
      var user = {
        userName: userName,
        email: email,
        phoneNumbers: phoneNumbers,
        password: password,
    };
    
    localStorage.setItem(fileId, fileContent);
    };
    reader.readAsText(file);
  }
});