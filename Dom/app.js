// document.getElementById()

console.log(document.getElementById('task-title'));

//Get something form the Element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


//Change styling
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

// change Content
document.getElementById('task-title').textContent = 'Task list';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style ="color:red"> TASK LIST</span>';

// Best way to practice that is by turning the object to variable
const taskTitle = document.getElementById('task-title');

taskTitle.style.background = 'blue';

// document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'green';
document.querySelector('li:last-child').style.color = 'yellow';
document.querySelector('li:nth-child(4)').style.color = 'pink';
document.querySelector('li:nth-child(3)').textContent = 'I am fab';

// ODD or EVEN
document.querySelector('li:nth-child(odd)').style.background = '#ccc';//single element selector so get only first odd
document.querySelector('li:nth-child(even)').style.background = '#5c47b8';//single element selector so get only first odd

// DOCUMENT By CLASS NAME
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.background ='red';
// items[3].innerText = 'Ma na ma na';


//Using it more in scope than globally
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// Get element by Tag name 
const lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[3]);
lis[2].style.background ='red';
lis[3].innerText = 'Ma na ma na';
