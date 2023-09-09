const array_numbers=[20,11,40,25,37,49,9,90,60,2,19];

console.log(`===================(Sum of all number using reduce)===============`);

let sum=array_numbers.reduce((pre,curr)=>{
      return pre+curr;
});
console.log(sum);

console.log(`===================(Sum of all number using Traditional way)===============`);
let addition=0;
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    addition=addition+element;
}
console.log(addition);

console.log(`===================(num is multiple by 5 and sum it)===============`);
sorted=array_numbers.filter((ele)=>{
    return  ele%5==0;
})
console.log(sorted);

Total=sorted.reduce((pre,curr)=>{
   return  pre+curr;
});
console.log(Total);