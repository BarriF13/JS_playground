// Subclass or inherit --- it is one way form parent to child npt the other way around
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    //super calls parent class constructor so we need to pass args on parents class in super only rest will be define here
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
  static getMembershipCost() {
    return '£500'
  }


}
const lolo = new Customer('lolo', 'Maya', '0099', 'Gold');
console.log(lolo);
console.log(lolo.greeting()); // we get the greeting from the parent methods

console.log(Customer.getMembershipCost()); 