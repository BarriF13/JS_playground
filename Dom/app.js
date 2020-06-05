//1- Creat element
const li = document.createElement('li');

//2- Add a class
li.className = 'collection-item';

//3-Add id
li.id = 'new-item';


//4-Add attribute 
li.setAttribute('title', 'New Item');

//5- Create text node and append --append means we want to put something inside of ><
li.appendChild(document.createTextNode('lolo'));

//7-  Create new link element
const link = document.createElement('a');

//8-  Add class
link.className = 'delete-item secondary-content';

//9-  add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// 10- Append link into li
li.appendChild(link);

//6- Append li as child t oul
document.querySelector('ul.collection').appendChild(li)

console.log(li);