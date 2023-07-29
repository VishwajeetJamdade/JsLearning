function monthOfYear(month) {
   switch (month) {
           case 1:
            console.log(` ${month} Month is January.`);
           break;
           case 2:
            console.log(` ${month} Month is February.`);
           break;
           case 3:
            console.log(` ${month} Month is Martch.`);
           break;
           case 4:
            console.log(` ${month} Month is April.`);
           break;
           case 5:
            console.log(` ${month} Month is May.`);
           break;
           case 6:
            console.log(` ${month} Month is June.`);
           break;
           case 7:
            console.log(` ${month} Month is July.`);
           break;
           case 8:
            console.log(` ${month} Month is August.`);
           break;
           case 9:
            console.log(` ${month} Month is September.`);
           break;
           case 10:
            console.log(` ${month} Month is October.`);
           break;
           case 11:
            console.log(` ${month} Month is November.`);
           break;
           case 12:
            console.log(` ${month} Month is December.`);
           break;
       default:
        console.log(` ${month}  is Invalid Data.`);
           break;
  } 
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
