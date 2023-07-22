function fun1() {
    console.log("                ",'Welcome Vishwajeet You are Learning Javascript');
}
fun1();
function fun2() {
    console.log("                ",'--------------------******-------------------');
}
fun2();
console.log("________________________________________________________________________");

function personalDetails(firstName,lastName,universityName) {
    console.log("Firstname :",firstName,"    ","Lastname :",lastName,"    ","UniversityName :",universityName);
}
var nm="Vishwajeet";
var sirname='Jamdade';
var uname="Shivaji University";
personalDetails(nm,sirname,uname);
console.log("__________________________________________________________________________________________");
function swapping(n1,n2)
{
    console.log("Before Swapping    value1:",n1,"   ","value2:",n2);
    var temp=n1;
     n1=n2;
    n2=temp;
    console.log("After Swapping    value1:",n1,"   ","value2:",n2);
}
var name1="Virat";
var name2="Anushka"
swapping(name1,name2);
var no1=1000;
var no2=2000;
swapping(no1,no2);//calling function
console.log("___________________________________________________________________________________________");
function addThreeValues(v1,v2,v3) {
    console.log("Values Are :",v1,v2,v3);
    var result=v1+v2+v3;
     return result;
    //  console.log(result);
}

var resultValue=addThreeValues(10.23,600,40);
console.log("Addition is :",resultValue);
var resultValue2=addThreeValues("Hello","Good","Morning");
console.log("Addition is :",resultValue2);
console.log("____________________________________________________________________________________________");

function bankDetails(BankName,accountNum,location,pinCode) {
    console.log("BankName  :",BankName,"  ","Account Number :",accountNum,"  ","Location :",location,"  ","PinCode :",pinCode);
}
var bn="CITY Bank";
var an=3456782345;
var lo="Pune";
var pc=431202;
bankDetails(bn,an,lo,pc);
bankDetails("Axis Bank",7856782345,"Mumbai",441202);
bankDetails("HDFC Bank",8956782345,"Pune",631202,"open");
console.log("_______________________________*********************************____________________________");
