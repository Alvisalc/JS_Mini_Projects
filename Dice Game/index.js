var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // 1st dice - Get the first dice element

image1.setAttribute("src", randomImageSource); // 1st dice - Set the source attribute

// Generate another random number between 1 and 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// 2nd dice - Build the full image source path
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// 2nd dice - Set the source attribute
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Compare the random numbers and find the winner
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}