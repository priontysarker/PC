let innerImage = document.querySelector(".inner-image")
let input = innerImage.querySelector("input")
let image = document.querySelector("#image")
let text = document.querySelector("#text")


const uploadBtn = document.getElementById('uploadBtn');
const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');

// 1. When the visible button is clicked, trigger the hidden file input
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

// 2. Listen for when a user selects a picture
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the selected file
    
    if (file) {
        // Create a temporary local URL for the selected image file
        const imageURL = URL.createObjectURL(file);
        
        // Pass that URL to your image element and make it visible
        previewImage.src = imageURL;
        previewImage.style.display = 'block'; 
    }
});


innerImage.addEventListener("click", () => {
input.click()
})