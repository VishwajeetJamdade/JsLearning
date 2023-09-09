class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
         this.emp_id=emp_id;
         this.emp_name=emp_name;
         this.emp_dept=emp_dept;
         this.emp_salary=emp_salary;
         this.emp_company=emp_company;
      
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

console.log("===== Finding the TCS employees only with there names ======");
let empTcs=array_emps.filter((emp)=>{
     return emp.emp_company=="TCS"
});
// console.log(empTcs);
   const empName=empTcs.map((emp)=>{
      return emp.emp_name
});
console.log(empName);

console.log("===== Finding the average salary of wipro emp ======");

let empWipro=array_emps.filter((emp)=>{
    return emp.emp_company=='Wipro';
});
// console.log(empWipro);
let total=0;
empWipro.forEach((emp)=>{
      total=total+emp.emp_salary
});
console.log(`The Average Salary of wipro emp :${total/empWipro.length}`);


console.log("===== Finding the average salary of wipro emp or Infy ======");
let averageSalary=array_emps.filter((emp)=>{
   return emp.emp_company=="Wipro" || emp.emp_company=="Infy"
});
// console.log(averageSalary);
WI=averageSalary.reduce((pre,curr)=>{
       return pre+curr.emp_salary
},0);
console.log(`Average Salary of Wipro and Infy Employees: ${WI/averageSalary.length}`);

