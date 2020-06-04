// if(something is true) {
//   do something
// } else {
//   do something else
// }

// const id = 100;
// //Equal to 
// if (id ==101) {
//   console.log ('TADA ')
// } else {
//   console.log('Noway')
// }
// //Not Equal to

// if(id != 101 ){
//   console.log ('TADA ')
// } else {
//   console.log('No way')
// }

// //Equal to Value & Type 
// if (id ===100) {
//   console.log (' Smashing  ')
// } else {
//   console.log('Noway')
// }
// //Equal to Value & Type 
// if (id !==100) {
//   console.log (' Smashing  ')
// } else {
//   console.log('Noway')
// }

//Test if undefined 
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('No ID')
// }

// Greater or Less than
// if(id > 300 ){
//   console.log('Smashing')
// } else {
//   console.log(' naha')
// }


// TERNARY OPERATOR
// const id = 100;
// console.log(id === 100 ? 'Smashing ': 'No Way');


// switches --better than too many elseif
// const color = 'Yellow';
// switch(color) {
//   case 'red':
//   console.log('color is red');
//   break; 
//   case 'blue':
//     console.log('color is blue');
//     break;
//     default: 
//     console.log('color is nothing');
//     break;
// }

let day;
switch(new Date().getDay()){
  case 0: 
  day = 'Sunday';
  break;
  case 1: 
  day = 'Monday';
  break;
  case 2: 
  day = 'Tuesday';
  break;
  case 3: 
  day = 'Wednesday';
  break;
  case 4: 
  day = 'Thursday';
  break;
  case 5: 
  day = 'Friday';
  break;
  case 6: 
  day = 'Saturday';
  break;
  
}
console.log(`Today is ${day}`);