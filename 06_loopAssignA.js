// var vowels=function(str)
// {
//     let count=0;
// for (let index = 0; index < str.length; index++) {
//     var char=str.charAt(index);
//    if (char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"||char=="E"||char=="I"||char=="O"||char=="U") {
//        console.log(char);
//        count++
//    }
// //    console.log(`The vovels number is : ${count}`);
// }
// console.log(`The count of total vovels is : ${count}`);
// }
// vowels("I am very good IT Developer");
console.log(`=========---------------------------__-----------------------`);
function vovels(string) {
    
    let count=0;
    let index=0;
    while (index<string.length) {
        var words=string.charAt(index);
        if (words=="a"||words=="e"||words=="i"||words=="o"||words=="u"||words=="A"||words=="E"||words=="I"||words=="O"||words=="U")
         {
            console.log(words);
            count++;   
        }
        index++;  
    }
    console.log(`Total vivels is : ${count}`);
}
vovels("I am very good IT Developer");
console.error(`--------------------------------------------------------------------------------------------------------------------------------------------++`);
function sumOfCube() {
    let cubeSum=0;
    for (let index = 1; index <= 5; index++) {
        let totalofCube=index*index*index;
        cubeSum=cubeSum+totalofCube;
       console.log(`The Cube of ${index} is :${totalofCube} and sun of cube is ${cubeSum}`);
        
    }
}
sumOfCube();
console.error(`--------------------------------------------------------------------------------------------------------------------------------------------++`);
function oddPositionedChars(str) {
    result="";
    for (let index = 0; index < str.length; index++) {
        let char=str.charAt(index);
        if (index%2!=0 && char!=" ") {
           result=result.concat(char).concat(" ");
           
        }
    }
    console.log(`${result}`); 
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will Angular IT Champ");
console.error(`--------------------------------------------------------------------------------------------------------------------------------------------++`);
