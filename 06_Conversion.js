console.log(`##########################################################################################################################`);
console.log(`____________________________===============*****Implicit Conversion*****==============___________________________`);
console.log(`                                                                                                                  `);
console.log(`---------------------------------------------Implicit Conversion Number to String -----------------------------------------------`);
var result;
result='3' +2;
console.log(`${result} : Because first value we give it's datatype is string and
 second value datatype is number so what he did he using
 "+"operator convert the number datatype into string and concate the both string.`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result='3' +true;
 console.log(`${result} : Because first value we give it's datatype is string and
 second value datatype is Boolean so what he did he using
 "+"operator convert the Boolean datatype into string and concate the both string.`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result='3' +undefined;
 console.log(`${result} : Because first value we give it's datatype is string and
 second value datatype is undefined so what he did he using
 "+"operator convert the undefined datatype into string and concate the both string.`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result='3' +null;
 console.log(`${result} : Because first value we give it's datatype is string and
 second value datatype is object so what he did he using
 "+"operator convert the object datatype into string and concate the both string.`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 console.log(`_________________________________________________________________________________________________________________________`);

 console.log(`---------------------------------------------Implicit Conversion Boolean To Number ---------------------------------------------`);
result='4'-true;
console.log(`${result} : Because first value we give it's datatype is string and
second value datatype is Boolean so what he did he Implicit the Boolean Value into
 number like "1"or"0" and make substraction`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result= 4+true;
 console.log(`${result} : Because first value we give it's datatype is number and
second value datatype is Boolean so what he did he Implicit the Boolean Value into
 number like "1"or"0" and make addition`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result= 4+false;
 console.log(`${result} : Because first value we give it's datatype is number and
 second value datatype is Boolean so what he did he Implicit the Boolean Value into
  number like "1"or"0" and make addition`);
  console.log(`-------------------------------------------------------------------------------------------------------------------------`);
  console.log(`_________________________________________________________________________________________________________________________`);
  console.log(`---------------------------------------------Implicit Conversion String To Number ---------------------------------------------`);
  result= '4'-'2';
  console.log(`${result} : Because first value we give it's datatype is string and
  second value datatype is also string Both oprant datatype is String but we pass this oprant
  "-" oprator so what he did he gives a priority to implicit into number datatype and then make substraction`);
  console.log(`-------------------------------------------------------------------------------------------------------------------------`);
  result= '4'-2;
  console.log(`${result} : Because first value we give it's datatype is string and
  second value datatype is number But we pass this oprant
  "-" oprator so what he did he gives a priority to implicit into number datatype and then make substraction`);
  console.log(`-------------------------------------------------------------------------------------------------------------------------`);
  result= '4'*2;
  console.log(`${result} : Because first value we give it's datatype is string and
  second value datatype is number but oprant contain number type of value so he Implicit
   the string value into number and then he make multiplication`);
   console.log(`-------------------------------------------------------------------------------------------------------------------------`);
   result= '4'/2;
   console.log(`${result} : Because first value we give it's datatype is string and
  second value datatype is number but oprant contain number type of value so he Implicit
   the string value into number and then he make division`);
   console.log(`-------------------------------------------------------------------------------------------------------------------------`);
   console.log(`#########################################################################################################################`);
   console.log(`---------------------------------------------Assignment-0C "Interesting Facts" ---------------------------------------------`);
  console.log(`Note: "Whenever we Compare two values we got Boolean type of value"`);
   result= 0==' ';
   console.log(`${result} : Because first oprant contain "0" value, and second value is between the string is "space", 
   "In string whenever we pass the value  he has own index so space index is "0" and this string implicit 
   into number so we got the value is "0" Thats why we got this answer in log`);
   console.log(`-------------------------------------------------------------------------------------------------------------------------`);
   result= 0=='0';
   console.log(`${result} : Because string type of value  implicit into number datatype `);
   console.log(`-------------------------------------------------------------------------------------------------------------------------`);
   result= 0==false;
   console.log(`${result} : Because first value we give it's datatype is number and
second value datatype is Boolean so what he did he Implicit the Boolean Value into
 number like "1"or"0" `);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result= null==undefined;
 console.log(`${result} : Because --------------------------------`);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result= 1==[1];
 console.log(`${result} : Because ------------------------------- `);
 console.log(`-------------------------------------------------------------------------------------------------------------------------`);
 result= 0==true;
 console.log(`${result} : Because first value we give it's datatype is number and
second value datatype is Boolean so what he did he Implicit the Boolean Value into
number like "1"or"0" `);
console.log(`-------------------------------------------------------------------------------------------------------------------------`);
result= 1=='1';
console.log(`${result} : Because string type of value  implicit into number datatype `);