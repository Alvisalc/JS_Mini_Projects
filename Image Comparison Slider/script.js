function slide(){
    // Retrieve the current value of the "slider" input element
    let slideValue = document.getElementById("slider").value;
    // Define a polygon clip path and set it as the clipPath property of "my-img"
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    // Log the polygon clip path to the console for debugging
    console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}