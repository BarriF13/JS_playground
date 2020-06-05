// Global Scope

var a = 1;
let b = 2;
const c = 3;

// function scope(){ //this vars only accessible inside the scope function
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope:', a ,b, c);
// }

// scope();

//Block scope

// if(true){
// var a = 7; //var changes --on seconde console.log
// let b = 8;
// const c = 9;
// console.log('If Scope: ', a ,b ,c);
// }

//try with Loop

for (let a = 0; a <10; a++ ){ // if we use var it will not be good
  console.log(`Loop: ${a}`);
}
console.log('Global Scope: ', a, b, c);
