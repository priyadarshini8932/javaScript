//js by default has prototypal behaviour
//js ko kuch nhi mil rha to wo uper jake dekhti hai, fir aur uper jake dekhti hai, parents , grandparents jb tk null nhi milta usko

//classes, prototypal inheritance, this all through prototype. in js everything is object

function multipleBy5(num){
    // this.num=num
    return num*5;
}

multipleBy5.power=2 //fuction is an object too
//function, function bhi hota hai aur object bhi
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype)

function createUser(username, score){
    this.username=username
    this.score= score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}
//this ka mtlb jisne bulaya uske pas jao, current context ka kam kro
const chai= new createUser("chai",25)
const tea=createUser("tea",250)

// myArray.prototype.map() nhi likhte myArray.map likhte hai,js says prototype ka kam behind the scene mai kr lunga

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/