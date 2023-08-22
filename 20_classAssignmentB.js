class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    show()
    {
        console.log(`The employee Details are ${this.emp_id},${this.emp_name},${this.emp_dept},${this.emp_salary},${this.emp_company}`);

    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

const array_employess =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`------------------Task-1(employees working in TCS)-------------------`);
for (const element of array_employess) {
//   console.log(element);
    if (element.emp_company=="TCS") {
             console.log(`This employee Working in "TCS" : ${element.emp_name} company Name is : ${element.emp_company}`);
    }
}
console.log(`------------------Task-2(Finance department employees)----------------`);
for (const ele of array_employess) {
    if (ele.emp_dept=="Finance") {
        console.log(`This employee Working in "Finance Department" :  ${ele.emp_name} DepartmentName Name is : ${ele.emp_dept}`);

    }
}
console.log(`------------------Task-3(whose name starts with R)----------------`);
for (const el of array_employess) {
    if (el.emp_name.startsWith("R")) {
        console.log(`This employees names Start with "R" This employes all Details are: `);
        el.show()
        
    }
}
console.log(`------------------Task-4(whose salary is greater than 75000)----------------`);
for (const element of array_employess) {
    if (element.emp_salary>75000) {
        console.log(`This Peoples salaries are greater than 75000 The employeeName is : ${element.emp_name},  Company Name is: ${element.emp_company}, Salary is :${element.emp_salary}`);
    }
}
console.log(`------------------Task-5(greater than or equal 50000 and from IT department)----------------`);
for (const ele of array_employess) {
    if (ele.emp_salary>=50000 && ele.emp_dept=="IT") {
       console.log(`This Employee Working in IT and there salary is greater than or equal 50000 `);
        ele.show();
    }
}
console.log(`------------------Task-6(employees working in Infy)----------------`);
for (const element of array_employess) {
        if (element.emp_company=="Infy") {
                 console.log(`This employee Working in "Infy" :`);
                element.show(); 
        }
    }