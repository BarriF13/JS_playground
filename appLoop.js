// FOR LOOP

for(let i = 0; i < 10; i++){
  console.log(i)
}
for(let i = 0; i < 10; i++){
  console.log('number: '+ i)
}
// with conditional
for(let i = 0; i < 10; i++){
  if(i === 7 ){
  console.log('number 7 is fab ');
  continue;
  }
  if(i === 9){
    console.log('that\' it I ma bored of loops')
    break;
  }

  console.log('Number ' +i)
}

