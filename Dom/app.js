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
document.querySelectorAll('li:nth-child(odd)').style.color = '#5c4';