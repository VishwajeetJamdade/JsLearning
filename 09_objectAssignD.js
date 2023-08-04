let professor=
{
    Name: "Gajanan Kharat",
    Subject: "Angular",
    Mobileno:9876543212,
    isMarried:true,
    city:"Pune",
    engineering : {
           Degree1: "CSC",
           Degree2: "PHD",
           Degree3: "Adv.Computing",
        teachersDegree:function()
        {
           console.log(`The Professors Degrees are ${this.Degree1},${this.Degree2},${this.Degree3} `);
        }
    },
        certificate: ["HackerRank","IFE Course","Adv Programming"]
}
professor.engineering.teachersDegree();
console.log(`-----------------------------------------TAsk-5-----------------------------------`);

professor.TotalExperience="14 Years";
console.table(professor);  //Before Modifing moile no
console.log(`-----------------------------------------TAsk-6-----------------------------------`);

professor.Mobileno=8789877790;
console.table(professor);  //after Modifing
console.log(`-----------------------------------------TAsk-7-----------------------------------`);
console.log(` Before Adding One Cretificate in last position${professor.certificate}`);
professor.certificate.push("Oracle Certificate")
console.log(` The Adding One Cretificate in last position${professor.certificate}`);
console.log(`-----------------------------------------TAsk-8-----------------------------------`);
let findingLastElementInArray=professor.certificate.length-1;
console.log(` The Last Certificate in array $(professor.certificate[findingLastElementInArray])`);