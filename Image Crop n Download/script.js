
// Get references by id
let fileInput = document.getElementById("file");
let image = document.getElementById("image");
let downloadButton = document.getElementById("download");
let aspectRatio = document.querySelectorAll(".aspect-ratio-button");
const previewButton = document.getElementById("preview");
const previewImage = document.getElementById("preview-image");
const options = document.querySelector(".options");
const widthInput = document.getElementById("width-input");
const heightInput = document.getElementById("height-input");

// Variables
let cropper = "";
let fileName = "";

// Event handler when user selects a file
fileInput.onchange = () => {
    // Clear existing data and hide elements
    previewImage.src = "";
    heightInput.value = 0;
    widthInput.value = 0;
    downloadButton.classList.add("hide");

    // Create a FileReader object to read the selected file
    let reader = new FileReader();
    // Read the selected file as a Data URL
    reader.readAsDataURL(fileInput.files[0]);

    // Event handler when the file reading is complete
    reader.onload = () => {
        // set the source of the image element to the Data URL
        image.setAttribute("src", reader.result);
        if (cropper) {
        cropper.destroy();
        }
        //Initialize cropper 
        cropper = new Cropper(image);
        options.classList.remove("hide");
        previewButton.classList.remove("hide");
    };
    // Extract and store the file name without the extension
    fileName = fileInput.files[0].name.split(".")[0];
};

//Set aspect ration
aspectRatio.forEach((element) => {
    element.addEventListener("click", () => {
        if (element.innerText == "Free") {
        cropper.setAspectRatio(NaN);
        } else {
        // Set the aspect ratio based on the button's text (e.g., "16:9" becomes 16/9)
        cropper.setAspectRatio(eval(element.innerText.replace(":", "/")));
        }
    });
});

// Height input field
heightInput.addEventListener("input", () => {
    const { height } = cropper.getImageData();
    if (parseInt(heightInput.value) > Math.round(height)) {
        heightInput.value = Math.round(height);
    }
    let newHeight = parseInt(heightInput.value);
    // Update the crop box height
    cropper.setCropBoxData({ height: newHeight });
});

// Width input field
widthInput.addEventListener("input", () => {
    const { width } = cropper.getImageData();
    if (parseInt(widthInput.value) > Math.round(width)) {
        widthInput.value = Math.round(width);
    }
    let newWidth = parseInt(widthInput.value);
    // Update the crop box width
    cropper.setCropBoxData({ width: newWidth });
});

// Preview button
previewButton.addEventListener("click", (e) => {
    e.preventDefault();
    downloadButton.classList.remove("hide");
    // Generate a cropped canvas and convert it to a Data URL
    let imgSrc = cropper.getCroppedCanvas({}).toDataURL();
    //Set preview image source
    previewImage.src = imgSrc;
    // Set doanload button properties for downloading the cropped image
    downloadButton.download = `cropped_${fileName}.png`;
    downloadButton.setAttribute("href", imgSrc);
});

// When the window is fully loaded
window.onload = () => {
  download.classList.add("hide");
  options.classList.add("hide");
  previewButton.classList.add("hide");
};