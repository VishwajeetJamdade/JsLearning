console.log(`========================Task-1========================================`);
let personlDetails=
{
  Name:"VishwajeetJamdade",
  Mobile:9595967762,
  EmailId:"vishwajeetjamdade@gmail.com",
  Address:"Sangli"
  
}
let collegeDetails={
    ClgName:"YCSRD Kolhapur",
    ClgFounder:"Board Members",
    ClgHead:"Bhosale.mam",
    ClgAddress:"Kolhapur"
}
let mergeAllDetails=Object.assign({},personlDetails,collegeDetails)
for (const key in mergeAllDetails) {
    if (mergeAllDetails.hasOwnProperty.call(mergeAllDetails, key)) {
        const element = mergeAllDetails[key];
        console.log(`Merged All Details ${element}`);
    }
}
console.log(`========================Task-2========================================`);
let array=["Vinay","Sanket","Niketan","Ravi","Kishor","Jayant","Sachin"]
Object.freeze(array);
// array.unshift("Rohan")
for (const iterator of array) {
    console.log(iterator);
}
console.log(`========================Task-3========================================`);
let str="CodeMind Technology";
var stringSplite=str.slice(8);
let hr=" ";
for (let index = stringSplite.length-1; index >=0; index--) {
    const element = stringSplite[index];
    hr+=element;
    
    
}
console.log(stringSplite);
console.log(hr);

