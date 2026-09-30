//array specific loop
// for of

["","",""] //array ke andar string
[{},{},{}] //array ke andar object

const arr=[1,2,3,4,5]

// for (const num of object) {  //object mtlb kis chiz per loop lagana hai
    
// }

for(const num of arr){
    // console.log(num);
}

const greetings="Hello world!";
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps
//remembers the original insertion order of the keys

const map= new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

// for(const key of map){
//     console.log(key);
// }
for(const [key,value] of map){ //for destructuring array
    console.log(key,':-',value);
}

// const myObject={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }

// for(const [key,value] of myObject){
//     console.log(key,':-',value);//objects are not iterable like this
// }

// const myObject={
//     game1:'NFS',
//     game2:'Spiderman'
// }
// for (const [key,value] of myObject){
//     console.log(key,':-',value); //objects are not iteable like this
// }