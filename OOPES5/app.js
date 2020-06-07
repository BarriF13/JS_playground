// Person constructor

function Person(name){
  this.name = name;
  
}

// console.log(this); // When this is using in global scope it is going to be pointed at window object
// this.alert();

const barri = new Person('Barri');
const madonna = new Person('Madonna');
