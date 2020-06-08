//Prototype inheritance

//1-  Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
// 2- make a prototype method
Person.prototype.greeting = function(){
return `Hello there ${this.firstName} ${this.lastName}`;

}
const person1 = new Person('Mana', 'Honana');

// console.log(person1.greeting());

//3- Customer constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}



//5- Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// 6- Make customer prototype return Customer()
Customer.prototype.constructor = Customer;

// 7- override the person prototype for customer
Customer.prototype.greeting = function(){
  return `Hiya, ${this.firstName} ${this.lastName} greeting to you.`
}

//4- Create customer
const customer1 = new Customer('Tom', 'Jones', '07919150488', 'Standard');

console.log(customer1);
console.log(customer1.greeting());

