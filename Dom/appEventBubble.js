// Input and form events
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');
// Clear input
taskInput.value = ''; // we need to run this after getting the value 

// form.addEventListener('submit', runEvent);

// // Key down
// taskInput.addEventListener('keydown', runEvent);

// // Key up
// taskInput.addEventListener('keyup', runEvent);

// Key press
// taskInput.addEventListener('keypress', runEvent);


//Focus
// taskInput.addEventListener('focus', runEvent);

//Blur
// taskInput.addEventListener('blur', runEvent);


//Cut 
// taskInput.addEventListener('cut', runEvent);

//Paste 
// taskInput.addEventListener('paste', runEvent);


//Input ---any input event , cut copy ....
// taskInput.addEventListener('input', runEvent);

//Change event
// select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

//this is for keydown
console.log(e.target.value);



//----very important for print value in a DOM element 
//  heading.innerText = e.target.value;


//Clear input value
//   console.log(taskInput.value)
//   e.preventDefault();
}