// FOR LOOP

// for(let i = 0; i < 10; i++){
//   console.log(i)
// }
// for(let i = 0; i < 10; i++){
//   console.log('number: '+ i)
// }
// // with conditional
// for(let i = 0; i < 10; i++){
//   if(i === 7 ){
//   console.log('number 7 is fab ');
//   continue;
//   }
//   if(i === 9){
//     console.log('that\' it I ma bored of loops')
//     break;
//   }

//   console.log('Number ' +i)
// }

//------------------ WHILE LOOP

// let i = 0 ;
// while(i<13 ){
//   console.log('number: '+ i);
//   i++
// }

// DO WHILE
// let i = 0;

// do {
//   console.log('number: '+ i);
//   i++;
// }
// while(i < 10);

// Loop through arrays

const colors = ['blue','black','red','yellow','green'];
// for(let i = 0; i < colors.length; i++){
//   console.log(colors[i]);
// }

// //ForEach 
// colors.forEach(function(item){
//   console.log(item);
// })
// //or
//  colors.forEach((item)=>console.log(item))

//  //Map an array
//  const users = [
//    {id:1, name: 'ALice'},
//    {id:2, name: 'Tatsiana'},
//    {id:3, name: 'Becks'},

//  ];
//  const ids = users.map(function(user){
//    return user.id
//  });
//  console.log(ids)

//ForEach --- show teo parameter ---show entire array
colors.forEach(function(item , index){
  console.log(` ${index}: ${item} `);
  console.log(colors);
});

// IN LOOPS FOR OBJECTS
const user = {
  firstName: 'Barri',
  lastName: ' Bellucci',
  age: 26,

}
for ( let x in user){
// console.log(x);
console.log(`${x}: ${user[x]}`);

}