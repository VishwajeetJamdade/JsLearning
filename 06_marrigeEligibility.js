var Eligible = function(gender,age)
{
    if (age<=0 || gender=="Other") {      //Chaking Invalid Posibilities
        console.log(`${gender},${age} it is Invalid Data`);
    } 
       if ((age>=21 && gender=="Male") || (age>=18 && gender =="Female")) {    // Actul program with valid conditions
           console.log(`Congratulation your age is ${age} so you are Eliible for Marrige`);
       } 
       else {
        console.log(`Sorry your age is ${age} so you are  not Eliible for Marrige`);
        
    }
}
Eligible("Male",17);
Eligible("Male",25); 
Eligible("Female",28);
Eligible("Female",16);
Eligible("Other",35);
Eligible("Other",41);
