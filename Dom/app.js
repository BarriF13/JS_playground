const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


// Click (click is one of the type on event object)
// clearBtn.addEventListener('click', runEvent);

//Double Click
// clearBtn.addEventListener('dblclick', runEvent);

//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// //MouseUp
// clearBtn.addEventListener('mouseup', runEvent);

// //Mouseenter
// card.addEventListener('mouseenter', runEvent);

// //Mouseleave
// card.addEventListener('mouseleave', runEvent);

// //Mouseover
// card.addEventListener('mouseover', runEvent);

// //Mouseout
// card.addEventListener('mouseout', runEvent);

//Mousemove ----using for game 
card.addEventListener('mousemove', runEvent);


// Event Handler 
function runEvent(e) {
  console.log(`Event TYPE: ${e.type}`);

heading.textContent = `MouseX : ${e.offsetX}, MouseY : ${e.offsetY} `;

document.body.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY}, 90)`;

}