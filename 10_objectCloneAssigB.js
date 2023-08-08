let bankSbi={
    bankName: "SBI Bank",
    accountNo: 778899,
    ifsc: "SBI003", 
}
let bankLocation={
    street: "Madava Road",
    city : "Pune",
    pinCode: 416524
}
console.log(`=========================================Task-1(Clone using object.assign)===========================================`);
let objectAssignMethod=Object.assign({},bankSbi,bankLocation);
console.log(`=========================================Task-2(Clone using spreadOperator)===========================================`);
let allDetails={...bankSbi,...bankLocation};
console.log(`=========================================Task-3.1(Clone using object.assign using forin loop logging details)===========================================`);
for (const key in objectAssignMethod) {
    if (objectAssignMethod.hasOwnProperty.call(objectAssignMethod, key)) {
        const element = objectAssignMethod[key];
        console.log(`All Details are using "Object.assign" method =>S ${element}`);
    }
}
console.log(`=========================================Task-3.2(Clone using spreadOperator using forin loop logging details)===========================================`);
for (const key in allDetails) {
    if (allDetails.hasOwnProperty.call(allDetails, key)) {
        const element = allDetails[key];
        console.log(`All Details are using "...(spreadOprator)" => ${element}`);
    }
}
let rateOfInterest={
          homeLoanInterest : "6%",
          personalLoanInterest :"10%",
          dueInterest : "4%"
}
console.log(`=========================================Task-4(merge)===========================================`);
let sbiDetails= Object.assign({},bankSbi,bankLocation,rateOfInterest);
  function Traverse(object) {
      for (const key in object) {
          if (object.hasOwnProperty.call(object, key)) {
              const element = object[key];
              console.log(`Before Merge  object properties are ${element}`);
              console.log(`After Merge  object properties are ${element}`);
           
          }
      }
      
  }
  Traverse(bankSbi);
   Traverse(sbiDetails);
