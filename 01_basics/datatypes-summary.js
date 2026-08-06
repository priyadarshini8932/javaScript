 // Primitive (call by value)
 // 7 types:String, Number, Boolean, null, undefined, Symbol, BigInt
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123') 
console.log(id=== anotherId)

const bigNumber= 243253464564569809845n

 //Reference type or Non-Primitive
 // Array, Objects, Functions

 //Js is a dynamically typed language

const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction =function(){
    console.log("Hello world")
}

console.log(typeof id)

//function ka return type function obj