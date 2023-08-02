const arrayFruites=["Banana","Orange","Apple","Mango","WaterMelon"];
console.log(`---------------------------Task-1--------------------------------------------------------------------`);
let elementLast=arrayFruites.length-1;
console.log(`The first element in array is "${arrayFruites[0]}" and last element is "${arrayFruites[elementLast]}"`);
console.log(`---------------------------Task-2--------------------------------------------------------------------`);
console.log(` Before One element Added before Banana: ${arrayFruites}`);
arrayFruites.unshift("Papaya");
console.log(`One element Added before Banana: ${arrayFruites}`);
console.log(`---------------------------Task-3--------------------------------------------------------------------`);
console.log(`Before removing mango in arrayFruites : ${arrayFruites}`);
let remove=arrayFruites.splice(4,1);
console.log(`After removing mango in arrayFruites : ${arrayFruites}`);
console.log(`---------------------------Task-4--------------------------------------------------------------------`);
console.log(`Before One element Adding in  last Position: ${arrayFruites}`);
arrayFruites.push("Pineapple");
console.log(`One element Added  last Position: ${arrayFruites}`);
console.log(`---------------------------Task-5--------------------------------------------------------------------`);
console.log(`Before adding Dragon fruit before watermelon in arrayFruites : ${arrayFruites}`);
let addingNewfruit=arrayFruites.splice(4,0,"Dragon Fruit");
console.log(`Before adding Dragon fruit before watermelon in arrayFruites : ${arrayFruites}`);
console.log(`---------------------------Task-6--------------------------------------------------------------------`);
let  arrayFruites1=["Papaya","Banana","Orange,Apple","Dragon Fruit","WaterMelon","Pineapple"];
console.log(`Before Replace Orange to Kiwi in arrayFruites : ${arrayFruites1}`);
arrayFruites1[2]="Kiwi";
console.log(`Replace Orange to Kiwi in arrayFruites : ${arrayFruites1}`);
console.log(`---------------------------Task-7--------------------------------------------------------------------`);
console.log(`Before Slicing arrayFruites : ${arrayFruites1}`);
let startFrom1to4=arrayFruites1.slice(1,4);
console.log(` start From 1to4 in arrayFruites : ${startFrom1to4}`);
console.log(`---------------------------Task-8--------------------------------------------------------------------`);
console.log(`${arrayFruites1}`);
for (let index = arrayFruites1.length-1; index >=3; index--) { 
   console.log(`${arrayFruites1[index]}`);
       
   }
    
