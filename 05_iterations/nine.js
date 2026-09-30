//initial value first time accumulator me jati hai

//pehli baar accumulator ki value initial value , uske bad result ki value hi accumulator me jati hai


const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currentval){
//     console.log(`acc ${acc} and currVal ${currentval}`)
//     return acc+currentval
// },0)

const myTotal=myNums.reduce((acc,curr)=>(acc+curr),0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
   
]

const addVal=shoppingCart.reduce((acc,item)=>(acc+item.price),0);
console.log(addVal)