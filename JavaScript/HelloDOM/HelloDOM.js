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

One possible use case: changing the color of a header etc based on user interactions (green for success? red for failure?)

Maybe there's a header that says "Log in to the app:"
-If the user logs in successfully, it can turn green and say "logged in!" before switching the page
-If the user fails to log in, it can turn red and say "login failed! please try again" */