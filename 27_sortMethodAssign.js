const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];

console.log(`===========================Task-1(Reverse the array)========================================`);

array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log(`===========================Task-2(sort Method without any custom sorting logic)========================================`);
array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log(`===========================Task-3(Sort the array in ascending order)========================================`);
let ase=array_roll_numbers.sort((a,b)=>{
return a-b
});
console.log(ase);
      console.log(`===========================Task-4( Greatest number from the array)========================================`);
    let Greatest=array_roll_numbers.sort((a,b)=>{
        return a<b?1:-1
    });
    console.log(`Greatest number from the array : ${Greatest[0]}`);
        
    console.log(`===========================Task-5( smallest number from the array)========================================`);
    let smallest=array_roll_numbers.sort((a,b)=>{
      return a>b?1:-1
  });
  console.log(`smallest number from the array : ${smallest[0]}`);

  console.log(`===========================Task-6(Remove duplicates from array)========================================`);
  console.log(`Before Removing Duplicate : ${array_roll_numbers}`);
  removeDuplicate = [...new Set(array_roll_numbers)];
  
    console.log(`After Removing Duplicate  : ${removeDuplicate}`);