// const userEmail= "" string ke andar no value =falsy value
const userEmail= [] 
// empty array = truthy value


if(userEmail){ //string ke andar value hai to it is truthy value
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy value 
// false ,0, -0, BigInt 0n, "", null, undefined, NaN

//except this all are truthy values

//truthy values
//"0", 'false', " ", [], {}, function(){} (empty function)

//string ke andar koi bhi value add ho gyi to that is truthy value

if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

Object.keys(emptyObj) 
// this will return the array 

//NUllish Coalescing Operator (??): null undefined

let val1;
// val1=5??10
// val1=null ?? 10
// val1=undefined?? 15
val1=null??10??20
console.log(val1);

//Ternary Operator
// condition ? true:false

const iceTeaPrice =100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")