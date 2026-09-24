// singleton -> jab ham literals ke tarah declare karte hai to singleton nhi banta



// Object.create  // constructor method ke through, singleton bnta hai

// object literals -> object ko declare karne ka tarika hai

const mySym=Symbol("key1")

const JsUser={
    name:"Hitesh",  // here name = "name", processed as a string,
    "full name":"Shreya Priyadarshini",
    [mySym]:"mykey1",
    age:18,
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)

// console.log(JsUser[mySym])
// console.log(typeof mySym)
// console.log(typeof JsUser[mySym])

JsUser.email="shreya@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="hitesh@chatgpt.com"
// console.log(JsUser["email"])

console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

// console.log(JsUser["name"])
// console.log(JsUser.name)
// JsUser.greeting3=function(){
//     console.log(`hello, ${this.age}`)
// }
// console.log(JsUser.greeting3())