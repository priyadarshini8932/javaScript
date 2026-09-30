//for



for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i+ '*'+j +'='+i*j);
    }
    // const element = array[i];
    
}
//pehle initialization fir condition check then print then increment
//wapas checking fir print then increment
// console.log(index)

//first time
// 1. Initialization
// 2. Condition check
// 3. Execute body / print
// 4. Increment

// Every subsequent time
// 1. Condition check
// 2. Execute body / print
// 3. Increment
// 4. Go back to condition

let myArray=["flash", "batman","superman"]
// console.log(myArray.length);
for(let index=0;index<myArray.length;index++){
    const element=myArray[index];
    // console.log(element);
}

//break and continue

// for(let index=1;index<=20;index++){
//     if(index==5){
//         console.log(`Detected 5`);
//         break; //used to break the control flow
//     }
//     console.log(`Value of i is ${index}`);
// }
for(let index=1;index<=20;index++){
    if(index==5){
        console.log(`Detected 5`);
        continue; //used to break the control flow
    }
    console.log(`Value of i is ${index}`);
}