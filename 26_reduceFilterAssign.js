
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
         this.emp_id=emp_id;
         this.emp_name=emp_name;
         this.emp_dept=emp_dept;
         this.emp_salary=emp_salary;
         this.emp_company=emp_company;
        // countEmp++;
    }


    show()
    {
        console.log(`The employee Details are : ${this.emp_id},${this.emp_name},${this.emp_dept},${this.emp_salary},${this.emp_company}`);

    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");


const array_emps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`========================Task-1(emp from wipro)=========================================`);
array_emps.filter((element)=>{
   if (element.emp_company=="Wipro") {
    // console.log(element.emp_id,element.emp_name);
    element.show();
   } 
});
console.log(`========================Task-2(emp from IT or HR)=========================================`);
array_emps.filter((element)=>{
    if (element.emp_dept=="IT" ||element.emp_dept=="HR" ) {
        element.show();
    }
})
console.log(`========================Task-3(emp id greater than 50)=========================================`);
array_emps.filter((element)=>{
  if (element.emp_id>50) {
    element.show();
  }
});

console.log(`========================Task-4(names start with letter A or V or M)=========================================`);
array_emps.filter((element)=>{
    let name=element.emp_name;
 for (const char of name) {
    if (char.startsWith("A") ||char.startsWith("V")||char.startsWith("M")) {
        element.show();
      }
 }
});
console.log(`========================Task-5(average salary of the employee)=========================================`);
let add=array_emps.reduce((previous,current)=>{
  return previous+current.emp_salary

},0);
console.log(array_emps.length);
console.log(`The average salary of all Department is ${add/array_emps.length} `);


console.log(`========================Task-6(average salary of the IT Dept)=========================================`);
let count=0;  
let itEmp=array_emps.filter((element)=>{
      if (element.emp_dept=="IT") {
        count++; 
        // console.log(element);
        return element
      }
  });
// console.log(itEmp);
  let totalSalary=itEmp.reduce((previous,current)=>{
    return  previous + current.emp_salary;
  },0);

console.log(`the average salary of IT Department is : ${totalSalary/count}`);
