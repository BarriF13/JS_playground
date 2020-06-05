// // document.getElementById()

// console.log(document.getElementById('task-title'));

// //Get something form the Element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);


// //Change styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// // change Content
// document.getElementById('task-title').textContent = 'Task list';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = '<span style ="color:red"> TASK LIST</span>';

// // Best way to practice that is by turning the object to variable
// const taskTitle = document.getElementById('task-title');

// taskTitle.style.background = 'blue';

// // document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'green';
// document.querySelector('li:last-child').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').style.color = 'pink';
// document.querySelector('li:nth-child(3)').textContent = 'I am fab';

// // ODD or EVEN
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';//single element selector so get only first odd
// document.querySelector('li:nth-child(even)').style.background = '#5c47b8';//single element selector so get only first odd

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
// const lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[3]);
// lis[2].style.background ='red';
// lis[3].innerText = 'Ma na ma na';

//--------below two lines will give us error as reverse is not a function
// lis.reverse();
// console.log(lis)

//-----so we have to :Convert  html collection in array
// let lis =  document.getElementsByTagName('li');
//  lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// })
// console.log(lis)

//Query Selector All

// document.querySelector all 

const items = document.querySelectorAll('ul.collection li.collection-item');
//we don't need to turn it to an array as they are NODE list
items.forEach(function(item){
  console.log(item);
  item.innerHTML = 'zaghart';
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach((item)=>item.textContent ='booboo')
liOdd.forEach((item)=>item.style.background ='blue');

liEven.forEach((item)=>item.textContent ='Mana mana');
liEven.forEach((item)=>item.style.background ='grey');
console.log(liOdd);