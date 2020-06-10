// function myFunc(){
//   return 'Hi';
// }
// console.log(myFunc());


// When we use async we get promise instead 
// async function myFunc(){
//   return 'Hi';
// }
// myFunc()
// .then(res => console.log(res));

// Now let play a bit more
// async function myFunc(){
//   const promise = new Promise((resolve, reject)=> {
//     setTimeout(()=> resolve('Hello'), 1000);
//   });

//   const res = await promise;//wait until promise is resolved 
//   return res;
// }
// myFunc()
// .then(res => console.log(res));

// Now with error 
async function myFunc(){
  const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('Hello'), 1000);
  });

  const error = true;
  if( error ){
    await Promise.reject(new Error('something wen wrong'));
  }else {
    const res = await promise;//wait until promise is resolved 
    return res;
  }

}
myFunc()
.then(res => console.log(res))
.catch(err => console.log(err))