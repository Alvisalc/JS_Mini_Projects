
// Get references
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Function to generate a QR code
function generateQR(){
        // Check the input text for generating QR code
        if(qrText.value.length > 0){
        // QR code image URL api
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        // Add show image to display the QR code
        imgBox.classList.add("show-img");
    }else{
        // Add error if no input text
        qrText.classList.add('error');
        setTimeout(()=>{
            // Remove the error after 1000ms (1 second)
            qrText.classList.remove('error');
        },1000);
    }
}