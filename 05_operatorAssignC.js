console.log(`____________________******Assignment-1*******______________________________________`);
var TCS =function(GS,HS,SS,name)
{
    var eligibility = (GS>=70 || HS>=80 ||SS>=90)?" Congrates you are Shortlisted For ":"Unfortunately you are not eligible for";
    console.log(`Hello, ${name} ${eligibility} TCS Interview.`);
}
TCS(80,86,90,"Vishwajeet");
TCS(70,65,55,"Akshay");
TCS(60,79,88,"Vishu");
console.log(`####################################################################################`);
console.log(`____________________******Assignment-2*******_______________________________________`);
function maleMarriageEligibility(gender,age,name) {
    var marrigeEligibility=(gender==="Male" && age>=21)?"you are eligible for Marriage.":"You are not eligible for marrige.";
    console.log(`Hey ${name} your age is ${age} so ${marrigeEligibility} `);
    // console.log(`Hey ${name} ${marrigeEligibility}`);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs")
console.log(`-------------------------------------------------------------------------------------`);
function femaleMarriageEligibility(gender,age,name) {
    var marrigeEligibility=(gender==="Female" && age>=18)?"you are eligible for Marriage.":"You are not eligible for marrige.";
    console.log(`Hey ${name} your age is ${age} so ${marrigeEligibility} `);
    // console.log(`Hey ${name} ${marrigeEligibility}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates")
console.log(`####################################################################################`);
