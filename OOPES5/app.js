// Build in constructor

// not use very often
// String
const name1 = 'Zaghart'; // value
const name2 = new String('Zaghart'); // Object

//name2.foo = 'bar';

console.log(name1);
console.log(name2);

if(name1 === 'Zaghart'){
  console.log('yes');
} else {
  console.log(' NO ')
}

// Number 
const num1 = 5; // number
const num2 = new Number(5); // object
console.log(typeof num2); 

// Boolean
const bool1 = true; // value
const bool2 = new Boolean(true); // object 

console.log( typeof bool2);

// Function 

const getSum1 = function(x , y ) {
  return x + y;
}
console.log(getSum1(3 , 4));

const getSum2 = new Function('x', 'y', ' return x + y');
console.log(getSum2(4 , 4));

// Object 
const jo = {name: 'Jo'};
const jo1 = new Object( {name: 'Jo'});
console.log(jo);
console.log(jo1);

// Array 
const arr1 = [1,2];
const arr2 = new Array(1,2);
console.log(arr1);

// Regular Expression 

const re1 = /\w+/; 
const re2 =  new RegExp('\w+');
console.log(re1);
console.log(re2);