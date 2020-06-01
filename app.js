// console.log('hello it is me');
// var greeting = "Hello";
// console.log(greeting +' Barri');
// console.log([1,3,55]);
// console.log({x:1, y:2});
// console.table({x:1, y:2})

// console.error('This is an error');
// // console.clear();
// console.warn('Beware of zombies');
// console.time('Hello');
//   console.log('Hello it is me');
//   console.log('Hello it is me');
//   console.log('Hello it is me');
//   console.log('Hello it is me');
//   console.log('Hello it is me');
//   console.log('Hello it is me');
// console.timeEnd('Hello');

// var, const , let

// var name = 'witch Wizard';
// console.log(name);
// name = 'Harry Potter';
// console.log(name);

// Initializing variable

// var sayMyName; //used for conditional a lot
// console.log(sayMyName);
// sayMyName = 'Madonna';
// console.log(sayMyName);

//let


// let name = 'witch Wizard';
// console.log(name);
// name = 'Harry Potter';
// console.log(name);

//Const -- can not assigned after it has been set up

// const name = 'Witch Wizard';
// console.log(name);
// also cant not assign it if we don't initialize it first
// const sayMyName;
// sayMyName = 'madonna';
// console.log(sayMyName); //missing initializer error

// const magic = {
//   name:'potions',
//   time : 'two days spell',
// }

// magic.name = 'voodoo';
// magic.time = 'a month';
// console.log(magic);
// in const we can change variables inside name and time - but can't change the const itself ---magic

// const num = [1,22,44,23];
// console.log(num);
// num = [34,555]; // can't change it can be added 
// num.push(34 ,555);
// console.log(num);

// String - number -boolean - Null - Symbols are primitive objects 

// Reference  objects :
//Array 
//object literal 
// const obj = {
//   magic: 'potions',
//   group: 'Witchery'
// }
// //time 
// const time = new Date();
// console.log(time);
// console.log(typeof time);
//---------------------------------------------
//object type conversion 
// let value;

// //number to string 
// value = 22;
// //wrap to string function
// value = String(22)
// // Output value in console
// console.log(value);
// console.log(typeof value);
// console.log(value.length);//undefine for number -- works for string 
// //number to string 
// value = String(4+4 );

// // Boolean to sting 
// value = String(true);

// // Date to sting 
// value = String(new Date());
// // Array to str
// value = String([22, 44, 34]);

// // toSting()
// value = (456).toString(); //similar to String()
// value = (true).toString();

//---------------string to Numbers
// value =Number('5');
// value =Number(true);
// value =Number(false);
// value =Number(null);
// value =Number('hello'); // NaN = Not a Number error. Means we try to pass something which it wasn't a number.
// value=Number([1,2,3]); // NaN array is not a number

//-----------------Parse int

// value = parseInt('1000000.099');
// value = parseFloat('1000000.099');
// // Output value in console

// console.log(value);
// console.log(typeof value);
// // console.log(value.length); // works for strings only
// console.log(value.toFixed()); // works for numbers only
// console.log(value.toFixed(2)); // gives two numbers after .

//Type coursion

// const x = 5;
// const y = 66;
// const sum = x + y;
// console.log(sum) ;
// console.log(typeof sum) ; //two numbers = numbers

// const x = '5';
// const y = 66;
// const sum = x + y;
// console.log(sum) ;
// console.log(typeof sum) ;


//Math objects 
 const x = 100;
 const y = 50;

 //Simple math with numbers
 value = x+y; // - * % /

// math with objects - round  - ceil - floor - random - sqrt

value = Math.PI;
value = Math.sqrt(65); // square
value = Math.abs(-66); //absolute
value = Math.pow( 8,3); // power 
value = Math.min( 2 ,3 ,1,5) // show the minimum
value = Math.max( 2 ,3 ,1,5) // show the max
value = Math.random(); // gives decimal
// that's how we use random in javascript
value = Math.floor(Math.random() * 20 + 1) // 20 is the max number that we want as a maximum number , we add ! not ignore zero
 console.log(value);