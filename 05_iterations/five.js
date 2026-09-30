const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val)
// })

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe) //just give the refrence do not write forEach(printMe()) coz it will execute the function

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
// myCoding.forEach(function (value){
//     console.log(value);
// })

myCoding.forEach((val)=>{
    console.log(val.languageName);
})