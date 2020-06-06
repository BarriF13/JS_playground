//--Set Local storage item

// localStorage.setItem('name', 'Barri');
// localStorage.setItem('age', '25');

//--Set session storage item

// sessionStorage.setItem('name', 'Becks');

//--Remove from storage
// localStorage.removeItem('name');

//--Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
const task = document.getElementById('task').value;

let tasks;

if(localStorage.getItem('tasks') === null){
  tasks = [];
} else {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);

localStorage.setItem('tasks', JSON.stringify(tasks));


alert('task saved')
  e.preventDefault();
});

//Now getting the data out from storage

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task);
})