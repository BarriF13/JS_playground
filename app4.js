// Object literals
// const person = {
//   firstName: 'Barri',
//   lastName: 'Faryad',
//   age: 45,
//   email: 'Info@zaghart.com',
//   hobbies: ['Dancing', 'music'],
//   address: {
//     city: 'London',
//     country: ' UK',
//   },
//   getBirthYear: function(){
//     return 2020 - this.age;
//   },

// }
// let value;

// value = person;

// // get specific
// value = person.firstName;
// console.log (value );
// value = person.lastName;
// console.log (value );
// value = person.address.country;
// console.log (value );
// value = person.hobbies[1];
// console.log (value );
// value = person.getBirthYear();
// console.log (value );

const wizards = [
  { name: 'Vata' , age: 22},
  { name: 'Mimi' , age: 92}
];

for(i = 0 ; i < wizards.length ; i++){
console.log(wizards[i].name);
}
