//first, we'll make a basic named function
//because of HOISTING, we can call this before it's declared
helloWorld();

function helloWorld(){
    console.log("hola mundo")
}

//Here's an anonymous function - it has no name, but we can assign them to variables
let anon = function(){
    console.log("HI I'm an anonymous function stored in a variable")
}

anon() //we can call the function by its variable name
//NOTE: anonymous functions aren't hoisted. they can't be invoked before declaration

//Arrow functions are like Java Lambdas. (value) => {code}
let arrowFunc = (var1, var2) => {
    //let's use this function to test out "==="
    console.log(var1 + " compared to " + var2)
    console.log(var1 === var2)
}

arrowFunc(null, false) //null is falsy, but a different datatype than false
arrowFunc(false, false) //same value and datatype

//Callback functions - functions that take other functions
function f1(x){
    console.log("Inside function 1")
    console.log("The value passed in from function 2 is: " + x)
    console.log("End of function 1")
}

function f2(x, someFunction){
    console.log("Inside function 2")
    someFunction(x) //so "someFunction" is intended to be a function passed into f2
    console.log("End of function 2")
}

//call f2, which takes a callBack function
f2(1000, f1)


//Closures - an old way of achieving encapsulation in JS

let greeter = function(name){
    return function(){
        console.log("Hello, " + name)
    }
}

//the nested function can access the "name" parameter, but can't change it - effectively final

//assign the function call the a variable, and give it an argument for name
nameBen = greeter("Ben")

nameBen() //"Hello, Ben"

//BUT once we assign the name variable directly to the greeter function, it can't ever change
greeter = greeter("Samuel")

greeter() //"Hello Samuel"

newGreeterAttempt = greeter("Eggward") //still "Hello Samuel"

greeter() //again, "Hello Samuel"

//so with closures, we can prevent the changing of the argument from inside AND outside the function
//We'll never write these ourselves but they're used in a lot of built-in JS mechanisms

//newGreeterAttempt() <- this is just an undefined variable, doesn't store it as a function

console.log("================(Global Scope)")




console.log("================(Local Scope)")



