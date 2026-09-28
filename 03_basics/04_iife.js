// Immediately Invoked Function Expressions (IIFE)
// global scope ke pollution ko hatane ke liye use this
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

//first () me function definition second me execution
// chai()

(()=>{
    console.log(`DB CONNECTED TWO`);
})();

((name)=>{
    //normal iffe
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')
// (function aurcode(){
//     console.log(`DB CONNECTED TWO`)
// })()