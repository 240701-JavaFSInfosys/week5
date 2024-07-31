//PokeAPI base URL - making a variable to hold the base URL to reach pokeAPI. This is for cleaner code
const url = "https://pokeapi.co/api/v2/pokemon/";
 
//use DOM Selection to select all of the elements I plan to fill with data
let pokename = document.getElementById("pokename");
let poketype = document.getElementById("poketype");
let pokenum = document.getElementById("pokenum");
let pokepic = document.getElementById("pokepic");
 
//when the user clicks the button, execute the fetchData method (using an eventListener)
document.getElementById("btn").onclick = fetchData;

/* This function will return some Pokemon data from pokeapi 
   It will use a fetch request to return a promise object
   The promise object will get filled with the Pokemon data we requested, or it will fail */
async function fetchData(){

    //first, we need to gather the user's input
    let userInput = document.getElementById("userInput").value

    //use the fetch() method to send a GET to the PokeAPI
    //fetch sends GET requests by default, so we can put the URL
    await fetch(url + userInput)
    .then((response) => response.json()) //extract the body of the response, and turning it into a JavaScript Object
    .then((data) => renderHTML(data)) //Send the JS data (held in the "data" variable) to our renderHTML() function to render it on the page
    .catch((error) => document.getElementById("header").innerText = "It got away...")
    .finally(() => 
        setTimeout(() => document.getElementById("header").innerText = 'Find another Pokemon: ', 2000)
    )
    //setTimeout() lets us define some functionality to run after some amount of milliseconds

}

//This function will take in the JS Pokemon data and render it onto the page
function renderHTML(data){

    console.log(data) //just to see the data in the console

    //getting all possible pokemon types in a String
    //for every type found, append it to the "types" variable
    let types = ""
    for(let element of data.types){
        types += (element.type.name + " ")
    }

    //populate the table with our pokemon data
    pokename.innerText = data.name
//  poketype.innerText = data.types[0].type.name 
    poketype.innerText = types
    pokenum.innerText = data.id

    //pokepic is an <img> so we need to set the src attribute (which is currently empty)
    pokepic.setAttribute("src", data.sprites.front_default)

}