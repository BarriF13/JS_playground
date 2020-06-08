// Object prototype
// Person.prototype

function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
 
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear()- 1970);
  // }
  
}

// Calculate age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()- 1970);
}

// Get full name

Person.prototype.fullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

// Stimulatecon
Person.prototype.getMarried = function(newLastName){
this.lastName = newLastName;
}


const madonna = new Person('Maddona','Chiccone','3-15-1968');
const cher = new Person('Cher','Sunny',' 3-15-1908');

console.log( cher.calculateAge());
console.log(madonna.fullName());

madonna.getMarried('Zaghartian');
console.log(madonna.fullName());

console.log(madonna.hasOwnProperty('firstName')); // it is part of her property
console.log(madonna.hasOwnProperty('getFullName')); // it is NOT part of her property