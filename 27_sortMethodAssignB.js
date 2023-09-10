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


const array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.log(`===========================Task-1(Sort ascending order of Emp Id)========================================`);
 
let sortByID=array_employees.sort((a,b)=>{
     return a.emp_id>b.emp_id
});
array_employees.map((emp)=>{
   console.log(emp.emp_id, emp.emp_name,emp.emp_dept);
});

console.log(`====Task-2(Sort ascending order of Emp dept)========================================`);
let sortByDept=array_employees.sort((a,b)=>{
    return a.emp_dept>b.emp_dept?1:-1
});
array_employees.map((emp)=>{
  console.log(emp.emp_id, emp.emp_dept,emp.emp_company);
});

console.log(`===Task-3(Sort Descending order of Emp salary)========================================`);
let sortBySalary=array_employees.sort((a,b)=>{
    return a.emp_salary<b.emp_salary?1:-1
});
array_employees.map((emp)=>{
  console.log(emp.emp_name, emp.emp_salary,emp.emp_company);
});