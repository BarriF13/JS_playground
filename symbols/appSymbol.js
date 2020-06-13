// Create a symbol

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');


// it is one and only 
// console.log( Symbol('123') === Symbol('123'));

// can not convert to string -- we can wrap or . toSting it
// console.log(`Hello ${sym1.toString()}`)

// Symbol used for = Unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2'); //--'sym2' is the id for symbol

const myObj = {};

// to give myObj a key as property we use []

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';

myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);

// Symbols are not enumerable in for ... in 

// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`); // it only gives 2 regular properties not symbols
// }

// Symbols also are ignored if we use JSON.stringfy (they take js object literal and change it to json string)

console.log(JSON.stringify({key : 'Prop'})); // gives json string
console.log(JSON.stringify({[Symbol('sym1')] : 'Prop'})); // gives empty object 