let infoJson =`{
    "name" :"Aleix Melon",
    "id": "E00245",
    "role":["dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
let infoObject=JSON.parse(infoJson)
console.log(`-------------Task-1-----------------------`);
console.log(`The Type of infoJson is : ${typeof infoJson}`);
console.log(`-------------Task-2-----------------------`);
console.log(`The Type of infoObject is : ${typeof infoObject}`);
console.log(`-------------Task-3-----------------------`);
let array=infoObject.role
    let newArray=[...array]
    for (const iterator of newArray) {
        if (iterator==="dev") {
            console.log(iterator);
        }
    }
    // let array=infoObject.role[0];
// console.log(array);

console.log(`-------------Task-4-----------------------`);
// let fullName=infoObject.name
// let str="";
// for (let index =fullName.length-5 ; index <fullName.length; index++) {
//     const element = fullName[index];
//     str=str+element;
// }
// console.log(str);
//let fullName=infoObject.name.substring(6)//using substring
// let fullName=infoObject.name.slice(6)//using slice
let fullName=infoObject.name.split(" ")
console.log(fullName[1]);
console.log(`-------------Task-5-----------------------`);
// let date =infoObject.doj
// let da="";
//       for (let index = date.length-4; index < date.length; index++) {
//           const ele = date[index];
//          da=da+ele; 
//       }
//       console.log(da);
// let date =infoObject.doj
// // console.log(typeof date);

// var newDate=new Date(date)
// let fullYear=newDate.getFullYear
// console.log(fullYear);
let date = infoObject.doj;  // Assuming infoObject contains the Date of Joining
// console.log(typeof date);

var newDate = new Date(date);
let fullYear = newDate.getFullYear();  // Corrected line: Added parentheses to call the function

console.log(fullYear);