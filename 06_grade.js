function gradeCalculation(marks) {
    var stringtoNum=+marks
    if (marks<=0|| marks>100 || isNaN(stringtoNum)) {     // This If For Invalid Data
        console.log(`${marks} Please Provide Valid Marks.`);
    } 
    else {
        if (marks>=75 && marks>=90) {             //This If For Valid Data for first condition
            console.log(`Hey Dear Excellent ${marks}, Your Grade is "A". `);
        } else
         {
            if (marks>=50 || marks>=75) {         //This If For Valid Data for second condition
                console.log(`Hey Dear Good ${marks}, Your Grade is "B". `);
            } else {
                console.log(`Hey Dear ${marks}, Your Grade is "C",You Need Improvement. `);
            }
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eight");
gradeCalculation(undefined);
gradeCalculation(null);