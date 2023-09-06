const array_numbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`___________________________*****Map method*****_________________________________`);

console.log(`==========================Task-1 (Add 10 Into Each element )======================`);
let result1= array_numbers.map((element)=>{
          return element+10;
     });
     console.log(result1);

 console.log(`==========================Task-2 (Cube of Each element )======================`);

       let result2=array_numbers.map((element)=>{
        //  return ` Square of ${element} is  :`+element*element
        return element*element*element
     });
    //  console.log(`The cube of array elements is ${result2}`);
    console.log(result2);

console.log(`==========================Task-2 (Add index value into Each element )======================`);
  let result3= array_numbers.map((element,index)=>{
       return element+index
   });
   console.log(result3);

   