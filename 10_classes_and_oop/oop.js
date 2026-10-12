
//object literal
const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
    // getUserDetails:function(){
    //     return "Got user details from database";
    // }
}


// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) //'this' value changes in the global execution context

// const promiseOne= new Promise()
const date=new Date() //new makes multiple instances from one object literal
//new makes new context and we call it constructor function

function User(username,loginCount, isLoggedIn){
    this.username=username //left variable, right is the value of argument
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this //even when we don't write this value return hoga hi
}

const userOne= new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11,false)
console.log(userOne);

//constructor function gives a copy, us copy ke sath jo krna hai kro, it is done using new.

//1
// new keyword use krne se ek empty object create hota hai jisko instance bolte hai

// ek constructor function call hota hai new keyword ke karan,sare arguments pass krke de deta hai

//this ke arguments isme inject ho jate hai

//we get that in the function

console.log(userOne.constructor)
//constructor reference hoti hai khud hi ke bare me

//constructor function acts as blueprint aur this is used to add values in that

