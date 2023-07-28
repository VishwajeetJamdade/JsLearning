function OddEven(value) {
    if (value%2==0) {
        console.log(`${value} is Even`);
    } else {
        console.log(`${value} is Odd`);
    }
}
OddEven(45);
OddEven(70);
OddEven(67);
OddEven(98);
console.log(`------------------------------------------------------------------------------------`);
function String(value1) {
    var str=value1.startsWith("Java");
    if ( value1.length>10 ){
        console.log(` The ${value1} characters:  ${value1.length} and start with java : ${str} `);
        
    }
else{
    console.log(`String length is less than 10`);
}
}
String("JavaScript-ES6");
String("JavaScript-Language");

