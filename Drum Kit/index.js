// Get the number of elements with the class ".drum" and store it in a variable
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for loop through each drum button
for (var i = 0; i < numberOfDrumButtons; i++) {

  // Add a click event listener to the drum button
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // // Get the innerHTML (the content) of the clicked button
    // var buttonInnerHTML = this.innerHTML;

    // // Call the makeSound function with the button's innerHTML as an argument
    // makeSound(buttonInnerHTML);

    // // Call the buttonAnimation function with the button's innerHTML as an argument
    // buttonAnimation(buttonInnerHTML);

    // the following this can handle the same with the above.
    // this - is the identity of the button that triggers the event listener.
    console.log(this);

  });

}

// Listen for key presses on the document
document.addEventListener("keypress", function(event) {

  // Play sound corresponding to the pressed key
  makeSound(event.key);

  // Apply animation to the button associated with the pressed key
  buttonAnimation(event.key);
});

// Function to play sound based on the key pressed
function makeSound(key) {

  // Switch statement to determin which soun to play based on the key pressed
  switch (key) {
    case "w":
      // Create a new Audio element with the sound file
      var tom1 = new Audio("sounds/tom-1.mp3");

      // Play the sound
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    // If the pressed key not match any, log it to console.
    default: console.log(key);

  }
}

// Function to apply animation to button associated with a key
function buttonAnimation(currentKey) {

  // Find the HTML element corresponding to the pressed key
  var activeButton = document.querySelector("." + currentKey);

  // Add the "pressed" class to the active button for visual effect
  activeButton.classList.add("pressed");

  // Remove the "pressed" class after a short delay (100 milliseconds)
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
