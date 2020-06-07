// Person constructor

function Person(name, dob){
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()- 1970);
  }
  
}

// console.log(this); // When this is using in global scope it is going to be pointed at window object
// this.alert();

// const barri = new Person('Barri', 22);
// const madonna = new Person('Madonna', 100);

// console.log(barri.name);

const barri = new Person('baba', '5-11-1974');
console.log(barri.calculateAge());