function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){ //function ko define krte time parameters
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){ 
    // let result=number1+number2
    // console.log("Shreya");
    // return result
    return number1+number2
}

// addTwoNumbers(3,null) //function ko call krte time arguments

const result= addTwoNumbers(3,5)
// console.log("Result: ",result);

// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shreya"))

// console.log(loginUserMessage(""))
// console.log(loginUserMessage("Shreya"))

// function calculateCartPrice(...num1){ // here ... is rest operator
//     return num1
// }

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(2))

// console.log(calculateCartPrice(200,400,500,2000))

const user={
    username:"Shreya",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"Priyadarshini",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));