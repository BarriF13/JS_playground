let value;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;

//GET child nodes--line break shows as text node on console


value = list.childNodes;
value = list.childNodes[0].nodeName;
value = list.childNodes[3].nodeType;


//Type of node list 
//1- Element
//2 - Attribute( deprecated)
//3- Text node
//8- Comment
//9- Document itself
//10 - Doctype



// Get children element nodes

value = list.children;
value = list.children;
value = list.children[1];
list.children[1].textContent='mana mana';

// Children of children 
list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0];

// First child
value = list.firstChild; //gives text which is linebreak in node and we don't want so 
value = list.firstElementChild; //this is more useful

// Last child
value = list.lastElementChild;


//Count child element
value= list.childElementCount;

// Get Parent Node 

value = listItem.parentNode;
value = listItem.parentElement;

value = listItem.parentElement.parentElement;

// Get prev sibling
value = listItem.prevSibling;
value = listItem.prevElementSibling;

// Get Next sibling --- going up and down on node tree is called traversing the dom (traveling)
value = listItem.nextSibling;
value = listItem.nextElementSibling.nextElementSibling;
console.log(value);