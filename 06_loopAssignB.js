function reverseString(str) {
    result="";
    for (let index = str.length-1; index>=0; index--) {
        var char =str.charAt(index);
        if (char!=" ") {
           result=result.concat(char).concat(" ");
        }
    }
    console.log(`${result}`)
}
reverseString("Soon I will Angular IT Champ")