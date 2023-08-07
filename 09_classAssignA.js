console.log(`===========================Task-1================================================================================================================================================`);
class Vehicle{
    constructor(Company,Model,Varient,FuleType,Color)
    {
       this.Company=Company;
       this.Model=Model;
       this.Varient=Varient;
       this.FuleType=FuleType;
       this.Color=Color;
    }
}
const TATA = new Vehicle("TATA Moters","Tata Nexon","SUV","Diesel","WhiteBlue");
const Manindra = new Vehicle("MAHINDRA","Thar","SUV","Diesel","Black");
const Hyundai = new Vehicle("HYUNDAI"," Creta","SUV","Diesel","Orange");
const Honda = new Vehicle("HONDA","honda City","HatchBAck","Diesel","Red");
const BMW = new Vehicle("BMW","BMW 7 SERIES","SEDAN","Diesel","Gray");


let arrayOfVehicle=[TATA,Manindra,Hyundai,Honda,BMW]
for (const iterator of arrayOfVehicle) {
    console.log(`The Vehicle Details Of TATA Companies ${"\n"} Vehicle Brand Name :${TATA.Company}, ModelName is : ${TATA.Model}, Varient is :${TATA.Varient},FuleType is: ${TATA.FuleType}, ModelColor is: ${TATA.Color}`);
    console.log(`The Vehicle Details Of MAHINDRA Companies ${"\n"} Vehicle Brand Name :${Manindra.Company}, ModelName is : ${Manindra.Model}, Varient is :${Manindra.Varient},FuleType is: ${Manindra.FuleType}, ModelColor is: ${Manindra.Color}`);
    console.log(`The Vehicle Details Of HYUNDAI Companies ${"\n"} Vehicle Brand Name :${Hyundai.Company}, ModelName is : ${Hyundai.Model}, Varient is :${Hyundai.Varient},FuleType is: ${Hyundai.FuleType}, ModelColor is: ${Hyundai.Color}`);
    console.log(`The Vehicle Details Of HONDA Companies ${"\n"} Vehicle Brand Name :${Honda.Company}, ModelName is : ${Honda.Model}, Varient is :${Honda.Varient},FuleType is: ${Honda.FuleType}, ModelColor is: ${Honda.Color}`);
    console.log(`The Vehicle Details Of BMW Companies ${"\n"} Vehicle Brand Name :${BMW.Company}, ModelName is : ${BMW.Model}, Varient is :${BMW.Varient},FuleType is: ${BMW.FuleType}, ModelColor is: ${BMW.Color}`);
}
console.log(`===========================Task-2================================================================================================================================================`);
class College{
    constructor(CollegeName,Founder,FoundedIn,Address){
      this.CollegeName=CollegeName;
      this.Founder=Founder;
      this.FoundedIn=FoundedIn;
      this.Address=Address;
}
dispaly()
{
    console.log(`College Details is NameOfCollege: ${ this.CollegeName} , The College Founder is: ${this.Founder}
      College Founded in: ${this.FoundedIn}, College address is: ${ this.Address}`);
}
}
const YCSRD=new College("YSCRD","XYZ",1967,"Kolhapur");
const PDVP=new College("PDVP","Abay Salunkhe",195,"Tasgaon");
const MPS=new College("MPS","Bapuji Salunkhe",1973,"Manerajuri");
const DY=new College("D Y PATIL","DYPatil",1967,"Pune");
let allCollege=[YCSRD,PDVP,MPS,DY]
for (const iterator of allCollege) {
    iterator.dispaly();
}
console.log(`===========================Task-3================================================================================================================================================`);
function traverseObject(obj1) {
    let newline="";
    for (const key in obj1) {
        if (obj1.hasOwnProperty.call(obj1, key)) {
            const element = obj1[key];
            newline=newline+element
           
        }
    }
    console.log(newline);
}
traverseObject(YCSRD);
traverseObject(PDVP);
traverseObject(MPS);
traverseObject(DY);
