// // ES6 -- for assign var

// // Destructuring Assignment

// let a, b;
// [a, b ] = [100, 200];

// // Rest pattern

// [a, b,...rest] = [100, 200, 300, 400, 500];
// console.log(rest);

// ( { a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 } );

// console.log(a,b);

// ( { a, b,...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 } );
// console.log(rest);

// // Array Destructuring

// const users = ['barri', 'Shadi', 'Noosha'];

// const [p1, p2 , p3] = users;

// console.log(p1);

// //Parse array return from function

// function usersP() {

//   return ['Cyrus', 'Anahit', 'Moosha'];
// }

// let pp1, pp2, pp3 ;
// [pp1,pp2,pp3] = usersP();
// console.log(pp1, pp2, pp3);


// Object destructuring ---react and module

const person = {
name: 'Zaghart',
age: 22,
city: 'London',
gender: 'fluid',

sayHello: function(name){
  console.log(`Hello ${name}`)
}
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 destructuring 

const {name ,age, city, sayHello} = person;

console.log(name, age, city);

sayHello(person.name);