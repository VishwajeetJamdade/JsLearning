var voteEligibe=function(num)
{
    var stringToNum=+num;
    if (num<=0 ||num>130 || isNaN(stringToNum)) {     // This If For Invalid Data
        console.log(`${num} is Invalid Data`);
    } 
    else {
       if (num>=18) {                                   // This If For valid Data
        console.log(`Your age is ${num} so you are Eligible For Vote`);
       } else {
        console.log(`Your age is ${num} so you are not Eligible For Vote`); 
       } 
    }
    

}
voteEligibe(45);
voteEligibe(17);
voteEligibe(-10);
voteEligibe(8);
voteEligibe(200);
voteEligibe(20);
voteEligibe(undefined);
voteEligibe(0);
voteEligibe(null);










 
