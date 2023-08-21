function add(num1, num2, ...num ){
   let array=[...num]
   let addition=0;
  for (const iterator of array) {
      addition=addition+iterator
  }
 console.log(`The addition of ${num1} and ${num2} and rest Parameters ${num} is : ${num1+num2+addition}`);

  
   
}
add(5, 6);
add(9, 5, 6);
add(78, 90, 51, 68);
add(89, 90, 45,78, 90, 51, 68);
