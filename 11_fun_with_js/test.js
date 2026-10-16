const myArr=[]
// %DebugPrint(myArr)

//engine mtlb wo jo ki code ko run karegi

//array are of two type continous(packed) and holey (jisme holes hai), array ka optimization hota hai that are of three types : 
// smi(small integer), 
// packed element, 
// double (float, string, function)

//array ke andar ke chizo ko elements bolte hai

const arrTwo=[1,2,3,4,5] //best type of array
//packed smi elemnts, no holes(by default)
//if packed smi se packed double element bna to fir wapas packed smi nhi bna skte
//ek bar downgrade hua to elements hta ke upgrade nhi kr skte
arrTwo.push(6.0)
//packed_double_elemnts
arrTwo.push('7')
//packed_elemnts

arrTwo[10]=11
//holey_elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[10])
// const arrThree=[1,2,,,4,5]//it has holes

//bound check
//element out of bound h ki nhi wo dekhna

//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)
//hasOwnProperty is most expensive check in js

//holes are very expensive in js

const arrThree=[1,2,3,4,5];
console.log(arrThree[2]);

//SMI >DOUBLE> PACKED (optimized) in contious
//H_SMI>H_DOUBLE>H_PACKED(holey)

//ekbar downgrade ho gya to upgrade hona almost impossible

const arrFour=new Array(3)
//just three holes. HOLEY_SMI_ELEMENTS
arrFour[0]='1' //HOLEY_ELEMENTS
arrFour[1]='2'
arrFour[2]='3'

const arrFive=[] //SMI
arrFive.push('1') //packed elements 
arrFive.push('2') //packed elements 
arrFive.push('3') //packed elements 

const arrSix=[1,2,3,4,5] //smi
arrSix.push(NaN) //packed double
arrSix.push(Infinity)//packed double

//for, for-of, forEach these internal method ko jyada use karie for optimization, rather than making your own methods