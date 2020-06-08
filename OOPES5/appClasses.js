// Class -- is like object constructor 

class Person {
  constructor(firstName , lastName , dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting(){
    return `${this.firstName} ${this.lastName} you are learning javascript`
  }

  calculateAge(){
    const diff = Date.now()- this.birthday.getTime();  
     const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  getMarried(newLastName){
    this.lastName = newLastName;
  }

  // static method
  static addNumbers(x, y){
    return x+y;
  }
}

const bb = new Person('Bari', 'Zaghart', '11-11-1979');

bb.getMarried(' Hobobaba');
console.log(bb);
console.log(bb.calculateAge());
// console.log(bb.addNumbers(3,4)); // we can not use static method by calling them 

console.log(Person.addNumbers(3 ,4));