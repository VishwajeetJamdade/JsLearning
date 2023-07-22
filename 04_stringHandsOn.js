function stringBasic() {
    console.log(`               *****Assignment-1*****                                             `);
    console.log(`-------------------____Step-1_____---------------------------------------------------`);//step 1
    var dream ="TCS and Microsoft";//initialization and declaration
    console.log(`My Dream Company is ${dream}`);//log on in console
}
stringBasic();//calling Finction
console.log(`-------------------____Step-2_____-------------------------------------------------------`);//step 2
var hobby1="DesignUsingCoding";
var hobby2="LearningNewTechnicalHacks";
var hobby3="SolvingRubikCube";
console.log(`My Hobbies are :  ${hobby1}, ${hobby2}, ${hobby3}`);
console.log(`-------------------____Step-3_____-------------------------------------------------------`);//step 3
var sumofhobby=hobby1.length+hobby2.length+hobby3.length;//doing addition meanwhile calculate the length as well
console.log(`Sum Of Total Number of Characters is :  ${sumofhobby}`);
console.log(`*****************************************************************************************`);
console.log(`               *****Assignment-2*****                                             `);
console.log(`-------------------____Step-1_____---------------------------------------------------`);//step 1
console.log("     Hey you are doing good, keep it up       ");
console.log(`-------------------____Step-2_____-------------------------------------------------------`);//step 2
function stringHandsOn() {
    var str="     Hey you are doing good, keep it up      ";
    var mainStr=str.length;
    console.log(`Length Of String is : ${mainStr}`);
    console.log(`-------------------____Step-3_____-------------------------------------------------------`);//step 3
    var spaceTrim=str.trim();
    var afterTrim=spaceTrim.length;
    console.log(`After Trim Length Of String is : ${afterTrim}`);
    console.log(`-------------------____Step-4_____-------------------------------------------------------`);//step 4
    var extraSpaceCount=mainStr-afterTrim;
    console.log(`Total Number Of Extra Spaces is : ${extraSpaceCount}`);
    console.log(`-------------------____Step-5_____-------------------------------------------------------`);//step 5
   var startchar= spaceTrim.charAt(0);
   console.log(`The First Character of string is : ${startchar}`);
   var endcha=spaceTrim.length-1;
   var endchar=spaceTrim.charAt(endcha);
   console.log(`The Last Character of string is : ${endchar}`);
   console.log(`-------------------____Step-6_____-------------------------------------------------------`);//step 6
   var totalnumberofWord=spaceTrim.split(' ');
   var totalnumberofWordCount=totalnumberofWord.length;
   console.log(`The Total Number of Word is : ${totalnumberofWordCount}`);
   console.log(`-------------------____Step-7_____-------------------------------------------------------`);//step 7
   var goodIndex= spaceTrim.indexOf('good');
   console.log(`The Index Of Word "good" is : ${goodIndex}`);
   console.log(`-------------------____Step-8_____-------------------------------------------------------`);//step 8
    var after22=spaceTrim.slice(22);
    console.log(`Substring Starting From "22" is : ${after22}`);
    console.log(`-------------------____Step-9_____-------------------------------------------------------`);//step 9
  var wordEndWith = spaceTrim.endsWith("up");
 console.log(`String is EndsWIth "up" : ${wordEndWith}`);
 console.log(`-------------------____Step-10_____-------------------------------------------------------`);//step 10
 var wordStartWith = spaceTrim.startsWith("Hey");
 console.log(`String is StartsWIth "Hey" : ${wordStartWith}`);
 console.log(`*****************************************************************************************`);

}
stringHandsOn();