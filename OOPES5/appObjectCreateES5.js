//ES5 object creating 

// 1- making an object literal

const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName){
      this.lastName = newLastName;
  }
}

// Making an object from the blue print
// 1- set a name 2- choose to create it from a blueprint 
const alex = Object.create(personPrototypes);

console.log(alex);
// Now adding properties
alex.firstName = 'Alex';
alex.lastName = 'Loobia';
alex.age = 44;

alex.getsMarried('Holooloo');


console.log(alex);
console.log(alex.greeting());


const barri = Object.create(personPrototypes , {
  firstName: {value: 'Barri'},
  lastName: {value: 'Zaghartian'},
  age: {value: 30}
});


console.log(barri.greeting());