const user={
    username:"shreya",
    price:999,
    
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`) //this here means current context
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this) //global ke andar koi context nhi hai to this is empty

//browser ke andar global object is window object

// function chai(){
//     let username="Shreya"
//     console.log(this.username);
// }
// chai(); 

// const chai=function(){
//     let username="Shreya"
//     console.log(this.username);
// }

// chai()


const chai=()=>{
    let username="Shreya"
    console.log(this)
}

// chai()

// ()=>{}

//explicit return =return likhna par rha hai
// const addTwo=(num1,num2)=>{
//     return num1+num2 //curly braces me likha to return krna parega
// }


// console.log(addTwo(3,4))

//implicit return = mai man leta hu apko likhne ki jarurat nhi hai

// const addTwo=(num1,num2)=>num1+num2 //normal braces ya no braces me return nhi likhna parega

// const addTwo=(num1,num2)=>(num1+num2)

// const addTwo=(num1,num2)=>{username:"hitesh"}
const addTwo=(num1,num2)=>({username:"hitesh"}) //object return krne ke liye () lgana parta hai
// console.log(addTwo(3,4))

// const myArray=[2,5,3,7,8]

// myArray.forEach(function(){})
// myArray.forEach(()=>{})
// myArray.forEach(()=())


let name="Shreya"
const user2 = {
    name: "Shreya",

    greet: () => {
        console.log(this.name);
    }
};

user2.greet();