const array_number=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`------------------------Task-1(Element And Index)-------------------------`);
array_number.forEach((element,index)=>{
  console.log(element,index);
})
console.log(`------------------------Task-2(Finding Positive Number)-------------------------`);
array_number.forEach((element)=>{
   if (element>0) { 
       console.log(`The Positive Number In array is : ${element}`);
   }
})
console.log(`------------------------Task-3(Finding a negative number and store this into new array)-------------------------`);
let newArray=[];
array_number.forEach((element)=>{
    if (element<0) {
        newArray.push(element) 
    }
});
console.log(newArray);
console.log(`The Negative Number In Newarray is : ${newArray}`);

console.log(`------------------------Task-4(Finding Even Number)-------------------------`);
array_number.forEach((element)=>{
  
if (element%2==0) {
    console.log(`The Positive Number In array is : ${[element]}`);
}
})
console.log(`------------------------Task-5(Doing Addition Of Array element)-------------------------`);
let addition=0;
array_number.forEach((element)=>{
      addition=addition+element
     
})
console.log(`The addition of All array element ${addition}`);

console.log(`------------------------Task-6(log only even indexed array values)-------------------------`);
array_number.forEach((element,index)=>{
       if (index%2==0) {
        console.log(`The Even Position or index Numbers ${element}`);
       }
})
