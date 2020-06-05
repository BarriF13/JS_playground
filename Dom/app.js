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