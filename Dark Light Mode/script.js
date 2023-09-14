// Get the element with the ID "toggle" from the document
document.getElementById("toggle").addEventListener("click", function(){
    // When the "toggle" element is clicked, this function is executed

    // Get the <body> element from the document (assuming there's only one body element)
    // The [0] index is used to access the first (and typically only) <body> element
    // This is done to apply changes to the entire document's body

    // Toggle the "dark-theme" class on the <body> element
    // If the class is not present, it will be added; if it's already present, it will be removed
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
