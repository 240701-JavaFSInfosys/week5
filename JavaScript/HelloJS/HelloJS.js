console.log("======================(Print/Declaring Variables)")

//JS is LOOSELY TYPED, so I can decalre variables without datatypes and easily reassign variable values to other data types
a = 100 //number
a = true
a = null
a = "Now I'm a String!"

//JavaScript will assign "var" if no other variable declaraion type is used

b = "I'm a var!"
let b2 = "I am a let! More modern version of var"
const b3 = "I am a const! My value won't change"

//Trying to get NaN (Not a Number - datatype we get when math op fails)
console.log("String " / 5)
console.log(Number("String " / 5))

console.log("===============(Testing Type Coercion)")

//Let's see what JS decides as the data type for these variables

let tc1 = "5" * 5
console.log("String times number is a: " + typeof tc1) //number
console.log(tc1)
//JS assumes we're doing math, since we're using the * operator

let tc2 = "5" + 5
console.log("String plus number is a: " + typeof tc2) //string
console.log(tc2)
//JS assumes we're String concatenating, since we're using the + operator

let tc3 = 5 + "5"
console.log("number plus String is a: " + typeof tc3) //string
console.log(tc3)
//Again, JS assumes we're String concatenating, since we're using the + operator

//Order doesn't matter if it's only 2 variables. it's the OPERATOR that matter in that case

//Now, let's see this with more than 2 variables

let tc4 = 5 + 5 + "5"
console.log("number plus number plus String is a: " + typeof tc4) //string
console.log(tc4) //5+5=10; 10 + "5" = "105"

let tc5 = "5" + 5 + 5
console.log("String plus number plus number is a: " + typeof tc5) //string
console.log(tc5) //"5" + 5 = "55"; "55" + 5 = "555"

//It's all math UNTIL a String gets put into the mix. Then it depends on the operator (specifically +)
//Strings + [something] create other String. String with any other math operator creates numbers 

console.log("================(Truthy/Falsy)")

//I want to write a function that compares two values to demonstrate truthy/falsy
//we'll be comparing some value to the booleans true or false
function testTrueFalse(var1, var2){
    console.log(var1 + " compared to " + var2)
    console.log(var1 == var2)
}

testTrueFalse(0, false) //true! 0 == false
testTrueFalse(1, true) //true! non-zero numbers == true
testTrueFalse(" ", false) //true! " " == false
testTrueFalse(2, true) //FALSE... WHY??? see below

//while any non-zero number is truthy, the boolean true evaluates to the number 1, while boolean false evaluates to 0.
//so comparing any number besides 1 to true will return false

//2 is truthy, I promise! I'll prove it:
if(2){
    console.log("any number besides 0 is truthy!")
}