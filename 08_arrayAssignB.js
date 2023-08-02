const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`---------------------------Task-1--------------------------------------------------------------------`);
console.log(`The Length of arrayNumbers is : ${ arrayNumbers.length}`);
console.log(`---------------------------Task-2--------------------------------------------------------------------`);
let lastelement= arrayNumbers.length-1;
console.log(`The first element is "${arrayNumbers[0]}" and Last element is "${arrayNumbers[lastelement]}" `);
console.log(`---------------------------Task-3--------------------------------------------------------------------`);
let lastThirdelement= arrayNumbers.length-3;
console.log(`Last Third  element is "${arrayNumbers[lastThirdelement]}" `);
console.log(`---------------------------Task-4--------------------------------------------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2==0) {
        console.log(`The even no is: ${element} `);
    }
}
console.log(`---------------------------Task-5--------------------------------------------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(`The Odd no is: ${element} `);
    }
}
console.log(`---------------------------Task-6--------------------------------------------------------------------`);
let addition=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
      let element =arrayNumbers[index];
     addition=addition+element;
      console.log(`the even position numbers is ${element}`);
    }
}
console.log(`The addition of even position is ${addition}`);
console.log(`---------------------------Task-7--------------------------------------------------------------------`);
let add=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 != 0) {
      const element =arrayNumbers[index];
      add=add+element;
      console.log(`the odd position numbers is ${element}`);
    }
}
console.log(`The addition of odd position is ${add}`);
console.log(`---------------------------Task-8--------------------------------------------------------------------`);
let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    var element  =arrayNumbers[index];
    sum=sum+element;
console.log(sum);
}
console.log(`The total sum is :${sum}`);
console.log(`---------------------------Task-9--------------------------------------------------------------------`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(`the divisible by 5 is : ${element}`);
    }
    
}
console.log(`---------------------------Task-10--------------------------------------------------------------------`);
var checkavalible=arrayNumbers.includes(115);
console.log(`The Number 115 is avalible : ${checkavalible}`);
console.log(`---------------------------Task-11--------------------------------------------------------------------`);
var checkavalible=arrayNumbers.includes(23);
console.log(`The Number 23 is avalible : ${checkavalible}`);
console.log(`---------------------------Task-12--------------------------------------------------------------------`);
console.log(`Before adding 55,66 at index 3 array is ${arrayNumbers}`);
arrayNumbers.splice(3,0,55,66)
console.log(`After adding 55,66 at index 3 array is ${arrayNumbers}`);
console.log(`---------------------------Task-13--------------------------------------------------------------------`);
console.log(`Before Deleting 3 elements starting from index 4 array is ${arrayNumbers}`);
arrayNumbers.splice(4,3);
console.log(`After Deleting 3 elements starting from index 4 array is ${arrayNumbers}`);
