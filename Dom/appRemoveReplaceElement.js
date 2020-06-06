// // Replace Element

//create element
const newHeading = document.createElement('h2');

//Add id 
newHeading.id ='task-title';
// create a new text node
newHeading.appendChild(document.createTextNode('Task listttt'));
// Get old heading
const oldHeading = document.getElementById('task-title');

// we need the parent to change the child inside the parent

//Getting the Parent

const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading , oldHeading);


// Remove Element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');


// Remove list item
lis[0].remove();


//Also we can remove by child
list.removeChild(lis[2]);



//CLasses and Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let value; 
//classes
value = link.className;
value = link.classList;
value = link.classList[0];

link.classList.add('test');
link.classList.remove('test');
value = link;

//Attr
value = link.getAttribute('href');
value = link.setAttribute('href', 'http://google.com');
value = link.hasAttribute('href');
value = link.setAttribute('title', 'Google');
value = link.hasAttribute('title');
value = link.removeAttribute('title')

value = link;
console.log(value);
