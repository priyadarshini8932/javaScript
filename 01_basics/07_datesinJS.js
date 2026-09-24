//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2026");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

let finalDate=newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(finalDate);
console.log(newDate);