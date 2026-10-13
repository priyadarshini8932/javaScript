// Object.getOwnPropertyDescriptor(Math)

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter)

const mynewObject=Object.create(null)
//by default value Object.create() ke andar null hoga

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderChai:function(){
        console.log("chai nhi bni")
    }
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
//here chai is an object and we have to ask for the specific property in that

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:true
})

// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(let [key,value] of Object.entries(chai)){
    if(typeof value!=='function'){
        console.log(`${key}:${value}`);
    }
    
}