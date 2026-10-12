// let myName="hitesh    "
// let mychannel ="chai   "
// // console.log(myName.trim().length);
// console.log(myName.truelength);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`)
}
// heroPower.hitesh()

//object has factory function like .create etc that is required to create an object

Array.prototype.heyHitesh=function(){
    console.log(`Hitesh says hello`);
}
// myHeros.hitesh()
// myHeros.heyHitesh()

// heroPower.heyHitesh()

//inheritance

const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport ={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern syntaxs
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="ChaiAurCode    "

String.prototype.trueLength =function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
//This means the current context wo kya hai
"hitesh".trueLength()
"iceTea".trueLength()