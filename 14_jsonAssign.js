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
console.log(`-------------Task-4-----------------------`);
let fullName=infoObject.name
let str="";
for (let index =fullName.length-5 ; index <fullName.length; index++) {
    const element = fullName[index];
    str=str+element;
}
console.log(str);
console.log(`-------------Task-5-----------------------`);
let date =infoObject.doj
let da="";
      for (let index = date.length-4; index < date.length; index++) {
          const ele = date[index];
         da=da+ele; 
      }
      console.log(da);
