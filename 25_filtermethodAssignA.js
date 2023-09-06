const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log(`___________________________*****filter method*****_________________________________`);


console.log(`==========================Task-1 (Greater Than 50)======================`);
let result1=array_numbers.filter((element)=>{
     return element>50;
});
console.log(result1);
console.log(`==========================Task-2 (all Even number)======================`);
let result2=array_numbers.filter((element)=>{
 return element%2==0;
});
console.log(result2);
console.log(`==========================Task-3 (all Odd number)======================`);
let result3 = array_numbers.filter((element)=>{
      return element%2==1;
});
console.log(result3);
console.log(`==========================Task-4 (Which no is multiply by 5 )======================`);
let result4= array_numbers.filter((element)=>{
    return element%5==0;
});
console.log(result4);
console.log(`==========================Task-5 (find the no between 20-50)======================`);
let result5=array_numbers.filter((element)=>{
     return  element>20 && element<50;
});
console.log(result5);