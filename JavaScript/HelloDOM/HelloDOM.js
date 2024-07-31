//I want to access the div that has an id of "div1"
//This is called DOM SELECTION 
let div1 = document.getElementById("div1")

console.log(div1)

//we can also select multiple elements by className
//this stores them in an HTMLCollection, which is like an Array
let divCollection = document.getElementsByClassName("divClass")

console.log(divCollection)
console.log(divCollection[0]) //indexed!

//console.log a meta tag just to see
let viewport = document.getElementsByName("viewport")
console.log(viewport)

//We can set attributes of the selected element - DOM MANIPULATION
div1.setAttribute("style", "background-color: lightblue")

/* Inline styling isn't great practice, so why would this^ be?

One possible use case: changing the color/content of a header etc based on user interactions 
(green for success? red for failure?)

Maybe there's a header that says "Log in to the app:"
-If the user logs in successfully, it can turn green and say "logged in!" before switching the page
-If the user fails to log in, it can turn red and say "login failed! please try again" */

console.log("================(Events)")

//DOM SELECT our first button (btn1)
let btn1 = document.getElementById("btn1")

//Event Listeners take in some event to listen for, and the function to execute
btn1.addEventListener("click", btn1Function)

function btn1Function(){
    //alert() makes a popup on the screen
    alert("YOU CLICKED A BUTTON! :)")
}


//Let's add functionality to the second button when clicked:
    //Add content to p1 when btn2 gets clicked
let btn2 = document.getElementById("btn2")
let p1 = document.getElementById("p1")

//There is a shorter way to add EventListeners, which I usually do
btn2.onclick = btn2Function

function btn2Function(){
    p1.textContent = "Thanks, now I have content!"
}

//some mouseOver/mouseLeave examples for our h2
let header = document.getElementById("header")

header.onmouseover = mouseoverFunction
header.onmouseleave = mouseleaveFunction

function mouseoverFunction(){
    header.textContent = "Don't touch me!!!!"
}

function mouseleaveFunction(){
    header.textContent = "Scroll over me again :("
}