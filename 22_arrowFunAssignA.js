let arrow=()=>{
    console.log(`Hello You are using arrow function`);
}
arrow();
console.log(`-------------------------Task-1--------------------`);
let arrowFun=()=>{
console.log(`Good Morning, Today is Tuesday `);
}
arrowFun();
console.log(`-------------------------Task-2--------------------`);
function multiplication(x,y,z=5) {
    console.log(`The multiplication is ${x*y*z}`);
}
multiplication(5,5,2);
multiplication(10,4);
console.log(`-------------------------Task-3--------------------`);
let arrowF=(arg1,arg2,arg3,arg4,arg5)=>{
      return arg1+arg2+arg3+arg4+arg5
}
console.log(`The Addition of all elements is :  ${arrowF(100,100,200,349,756)}`);
console.log(`The addition is : ${arrowF("I am","learning","ES6","Feature","in depth")}`);



