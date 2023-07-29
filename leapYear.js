function checkLeapYear(year) {

    //three conditions to find out the leap year
    if (year<=0 || year =="null"|| isNaN(year)) {
        console.log(`${year} is Invalid Data`);
    } else {
        if ((year % 4== 0) && ( year % 100 !=0) || (year % 400 == 0)) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);