console.log(`************************** Function Expression Assignment****************************`);
console.log(`__________________________________________Task-1____________________________________________`);//step-1
   var square = function(num)//Function Expression assign veriable to function and passing argument
{
    var squareOfTwoNumber=num*num;//calculating square
    console.log(`The square Of The ${num} is : ${squareOfTwoNumber}`);

}
square(5);//Assign function variable thats why calling function variable
square(6);
square(25);
square(100);
square(67.89);
square(59);
console.log(`__________________________________________Task-2____________________________________________`);//Task-2
console.log(`The type of function is : ${typeof square}`);//checking type of function
console.log(`__________________________________________Task-3____________________________________________`);//Task-3
var area=function(length,width)//declaring and Initializing and passing argument
{
    var areaofractangle=length*width;
    console.log(`The Length of Ractangle is ${length}, Width of Ractangle is ${width}`);
    console.log(`The Area of Ractangle is : ${areaofractangle}`);
}
area(499,917);
console.log(`__________________________________________Task-4____________________________________________`);//Task-4
 var swapValues=function(value1,value2)
{
  console.log(`Before Swapping The Values are : ${value1} and ${value2}`);
  var tempvalue=value1;
  value1=value2;
  value2=tempvalue;
  console.log(`After Swapping The Values are : ${value1} and ${value2}`);

}
swapValues("Mahi","Raina");
swapValues(55,77);
console.log(`__________________________________________Task-5____________________________________________`);//Task-5
var mainString=function()
{
    var String =("JS is the Most popular language of internet")
    console.log(`The String is : ${String}`);
   console.log(`The Total Character in String is: ${String.length}`);//using length method find the length of string
   console.log(`The  Character at "6" is : ${String.charAt(6)}`);//using charaAt method we give as index  and he retuen a character
   console.log(`The  Character at "11" is : ${String.charAt(11)}`);
   var lastchar=String.length-1;
   console.log(`The Last Character of String is : ${String.charAt(lastchar)}`);
   console.log(`The Very First Character  is : ${String.charAt(0)}`);
var thirdLastchar=String.length-3;
   console.log(`The  Third Last Character of String is : ${String.charAt(thirdLastchar)}`);
  var totalChar=String.split(" ");//using split method we find out the total character
  var totalWordCount=totalChar.length;
  var squareOfWord=totalWordCount*totalWordCount;
     console.log(`The Total Number Of Word is ${totalWordCount} And the square of word is : ${squareOfWord}  `);
     console.log(`___________________**************************************************__________________`);

}
mainString();