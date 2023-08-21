
// Select H1 and provide a css (But it is dirty code, not clean)
//$("h1").css("color", "blue")

// The following is better wat to use "addClass" to add the class from CSS file.
// a SPACE between classes can adopt multipule css.
// $("h1").addClass("big-title margin-50");

// the following code will update every button into new text.
// $("button").text("Don't Click me");

// the following code can include html code to change the style.
// $("button").html("<em>Click</em>");

// console.log - JS function to log output to the browser's console.
// console.log($("img").attr("src"));

// Change all the "a" class to other website.
// $("a").attr("href", "https://www.udemy.com")

// JS code - a function to change the color of h1 by clicking any button.
// for (var i = 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     })
// }

// jQuery code - same function as above, but shorter and faster.
$("button").click(function(){
    $("h1").css("color", "purple");
});

// this code can track what key has been pressed everytime.
// $("input").keypress(function(event){
//     console.log(event.key);
// });

// hide the "h1" class by clicking any button.
// $("button").on("click", function(){
//     $("h1").hide();
// })
// simply use the following code to show it back.
// $("h1").show();


// $("button").on("click", function(){
//     $("h1").toggle(); //toggle will make it disappear and by clicking the button again, will show up again.
// })

// $("button").on("click", function(){
//     $("h1").fadeOut(); //fadeOut will delay the time of disappear.
// })

// $("button").on("click", function(){
//     $("h1").slideUp(); //slideUp / slideDown / slideToggle - better for hidden menu.
// })

// Single animation
// $("button").on("click", function(){
//     $("h1").animate({margin: "20%"}); //any animate value should be in number value, e.g. 20%.
// })

// Multi animation
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
