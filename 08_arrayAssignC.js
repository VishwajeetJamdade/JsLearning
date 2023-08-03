console.log(`-------------------------Removing Dulicate element on array------------------------`);
    let array = [4,5,4,5,8,5,7,8, 9, 7,8];
    let resultArr = [];
    // Iterate through array
    for (let i of array) {
      if (resultArr.indexOf(i) === -1) {
        resultArr.push(i);
      }
    }
    console.log(`Before Removing the duplicate value ${array}`);
    console.log(`After Removing the duplicate value ${resultArr}`);
    
