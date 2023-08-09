let arrayNums =[20,3,4,56,90,400,49]
console.log(`------------------------------Task-1(shallow clone)-----------------------------------`);
const newArray=arrayNums;
console.log(`Before updating value in cloned array`);
console.log(newArray);
newArray.push(55,66);
console.log(`After updating value in cloned array`);
console.log(newArray);
console.log(`------------------------------Task-2(deep clone)-----------------------------------`);
const deepCloneArray=[...arrayNums];
console.log(`Before updating value in original array`);
console.log(arrayNums);
arrayNums.push(10,25)
console.log(`After updating value in original array`);
console.log(arrayNums);
console.log(`------------------------------Task-3(Merge array)-----------------------------------`);
let arrayEven= [2,30,14,8] 
console.log(`Before Merge value in original array`);
console.log(arrayNums);
// Object.assign(arrayEven,arrayNums);
// arrayNums={...arrayEven}
 arrayNums=arrayEven+arrayNums
console.log(`After Merge value in original array`);
console.log(arrayNums);
console.log(`------------------------------Task-4(nested object)-----------------------------------`);
const employee_info={
    emp_id:27,
    emp_name: "John Doe",
    salary:{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society",
            street:"Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India",
    },
    mobiles:["+91 8600 3456 88","1800- 4567 32","+91 9096 5678 77"]
}
console.log(`------------------------------Task-5(nested object loging the values)-----------------------------------`);

console.log(`logging the object values`);
   console.log("Address is :",employee_info.address.locality,"City is :",employee_info.address.city,"State is :",employee_info.address.state,"Country is:",employee_info.address.country);
  console.log(`Mobile no is :S ${employee_info.mobiles}`);
  console.log(`------------------------------Task-6 (Deep Clone Using json phase)-----------------------------------`);
let jackEmployee_info=JSON.parse(JSON.stringify(employee_info))
console.log(`------------------------------Task-6.A (Upadating clone object value)-----------------------------------`);
console.log(`before updating value in  cloned object  `);
console.log(jackEmployee_info.salary.july_month);
jackEmployee_info.salary.july_month="80K";
console.log(`After updating value in  cloned object`);
console.log(jackEmployee_info.salary.july_month);
console.log(`------------------------------Task-6.B (Upadating original object value)-----------------------------------`);
console.log(`before updating value in  Original object  `);
console.log(employee_info.address.country);
employee_info.address.country="United Kingdom";
console.log(`After updating value in  Original object`);
console.log(employee_info.address.country);
console.log(`------------------------------Task-6.c (Logging object values)-----------------------------------`);
function traverseObjects(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(element);
        }
    }
}
traverseObjects(employee_info);//original object call
traverseObjects(jackEmployee_info);//cloned object call
