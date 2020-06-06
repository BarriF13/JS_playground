// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   // e.defaultPrevented();
//   console.log('Hello world')
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){ // e is event object
  // console.log('mana mana');
  let value;

  value = e;

  //Event target element
  value = e.target;
  value = e.target.id;
  value = e.target.className;
  value = e.target.classList;

  // e.target.innerText = 'hello';

  // Event Type
value = e.type;

// Timestamp
value = e.timeStamp;

// Coords event relative to the window
value = e.clientY;
value = e.clientX;

// Coords event relative to the element
value = e.offsetY;
value = e.offsetX;


  console.log(value);
};