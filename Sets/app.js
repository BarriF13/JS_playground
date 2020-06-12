// SETS - store unique values of any type-- no doublicates

const set1 = new Set();

// Add value to set 

set1.add(100);
set1.add('A string');
set1.add({name:'John'});
set1.add(true);
set1.add(100) // it's a double won't be added

// console.log(set1);

// // you can set up ses with below or above formats
// const set2 = new Set([1, true, 'bla']);
// console.log(set2);


// // Get count 
// console.log(set1.size);

// // check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John'})); // it is false it is not the same in binary

// Delete from set
// set1.delete(100);
// console.log(set1);

//Iterating through sets


// // For..of 
// for (let item of set1){
//       console.log(item);
// }
// // get the same thing with keys or values
// for (let item of set1.keys()){
//       console.log(item);
// }

// // forEach Loop
// set1.forEach((value)=> console.log(value));

// Convert sets to array

const setArr = Array.from(set1);
console.log(setArr);