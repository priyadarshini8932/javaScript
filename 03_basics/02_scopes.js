

{} // this is the scope

//global scope
var c=300
let a=300
if(true){ // block scope
    let a=10
    const b=20
     c=30
    //  console.log("INNER:",a)
}

// for(let i=0;i<Array.length;i++){
//     const element= array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);
// don't use var 

//console ke andar ka scope and code ke through node env me global scope is different

function one(){
    const username="Shreya"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username="Shreya"
    if(username==="Shreya"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++ interesting +++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}


// addTwo(5)
const addTwo=function(num){ //expression, hai function hi
    return num+2
}

const three=function(num){
    return num+3;
}
console.log(three(4));