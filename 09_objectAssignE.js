let sbiBank=
{
    bankName:"SBI bank",
    location:"Pune",
    accountNo:2345678909,
    ifsc:"SBI0000656",
    interestRate:6.2,
    showDetails:function()
    {
        console.log(`All Details are ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
let axisBank=
{
    bankName:"Axis bank",
    location:"Sangli",
    accountNo:9865776543,
    ifsc:"AXIS00004567",
    interestRate:4.1,
    showDetails:function()
    {
        console.log(`All Details are ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
let hdfcBank=
{
    bankName:"HDFC bank",
    location:"Kolhapur",
    accountNo:5657486899,
    ifsc:"HDFC0000656",
    interestRate:8.2,
    showDetails:function()
    {
        console.log(`All Details are ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
let yesBank=
{
    bankName:"YES bank",
    location:"Satara",
    accountNo:678987665,
    ifsc:"YES000053656",
    interestRate:3.2,
    showDetails:function()
    {
        console.log(`All Details are ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();