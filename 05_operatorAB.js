console.log(`___________________   **********Assignment-1**********_____________________________`);

console.log(`_________________________________________Task-1____________________________________`);

function squareOfWordLength(value)
{
    var lengthofWord= value.length  ; 
    var square =lengthofWord*lengthofWord;
    console.log(`The Length Of Word is ${lengthofWord} and Square of Word is : ${square}`);
    return square;
    

}
var squareofword =squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`_________________________________________Task-2____________________________________`);
var string = function()
{
    var str ="I am Angular Developer";
    var strlength =str.length;
    var totalWords =str.split(" ").length;
    var result = strlength/totalWords;
    var result1 =strlength*totalWords;
    console.log(`The String is : ${str} and the Length Of String is : ${strlength}`);
    console.log(`The Total Word Count in String is : ${totalWords}`);
    console.log(`The length is divide by total no of word then answer is : ${result}`);
    console.log(`The length is Multiply by total no of word then answer is : ${result1}`);
}
string();
console.log(`###################################################################################`);

console.log(`___________________   **********Assignment-2**********_____________________________`);
console.log(`_________________________________________Task-1____________________________________`);
var greaterNumber=function(num1,num2)
{
   var findGreater=(num1>num2)? num1:num2;
   console.log(`The Greater Between ${num1} and ${num2} is : ${findGreater}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`_________________________________________Task-2____________________________________`);
var evenOdd=function(num)
{
    var numberIsEvenOrOdd=(num%2==0)?'True':'False';
    console.log(`The Number ${num} is Even : ${numberIsEvenOrOdd}`);
    // console.log(`The Number ${num} is Even : ${result}`);
    return numberIsEvenOrOdd;
}
var result=evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);
console.log(`_________________________________________Task-3____________________________________`);
var wordLength=function(str)
{
    var lengthofword=str.length;
    var evenOdd =(lengthofword%2==0)?'Even':'Odd';
    console.log(`The Given word length is ${lengthofword} so it's ${evenOdd}`);
    return evenOdd;

}
var result= wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
console.log(`###################################################################################`);
