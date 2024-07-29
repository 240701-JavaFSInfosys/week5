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

console.log("===============(Testing Type Coercion)")

//Let's see what JS decides as the data type for these variables

let tc1 = "5" * 5
console.log("String times number is a: " + typeof tc1)
console.log(tc1)
//JS assumes we're doing math, since we're using the * operator

let tc2 = "5" + 5
console.log("String plus number is a: " + typeof tc2)
console.log(tc2)
//JS assumes we're String concatenating, since we're using the + operator

let tc3 = 5 + "5"
console.log("number plus String is a: " + typeof tc3)
console.log(tc3)
//Again, JS assumes we're String concatenating, since we're using the + operator

//Order doesn't matter if it's only 2 variables. it's the OPERATOR that matter in that case

//Now, let's see this with more than 2 variables

let tc4 = 5 + 5 + "5"
console.log("number plus number plus String is a: " + typeof tc4)
console.log(tc4) //5+5=10; 10 + "5" = "105"

let tc5 = "5" + 5 + 5
console.log("String plus number plus number is a: " + typeof tc5)
console.log(tc5) //"5" + 5 = "55"; "55" + 5 = "555"

//It's all math UNTIL a String gets put into the mix. Then it depends on the operator (specifically +)
//Strings + [something] create other String. String with any other math operator creates numbers 

console.log()