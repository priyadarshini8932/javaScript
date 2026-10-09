// in most operation we consume promises

// fetch('https://something.com').then().catch().finally()

//promise is an object

//Q and bluebird are libraries used with js when promises was not a part of pure js 

//promises reduce callback hell (callback ke andar callback uske andar callback etc)
//creating promises
const promiseOne=new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Asyn task is complete')
        resolve()
    },1000)
    
})

//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed") //ye kabhi bhi pehle print nhi hoga
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve(); //resolve informs .then ab kam krlo
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})
//resolve connected with .then

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

// promiseFour.then().catch()
const username=promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected"))

// console.log(username);

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:123})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response =await promiseFive
        //promise is an object cannot be consumed like promiseFive()
        console.log(response)
    }catch(error){
        console.log(error);
    }
    
}

consumePromiseFive()


// async function getAllUsers(){
//     try{
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E: ",error);
//     }
  
// }


// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data); //values are thenalbe (sort of chainable)
}) 
.catch(function(e){
    console.log("E: ",error);
})