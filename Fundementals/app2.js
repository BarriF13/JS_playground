const name = 'Ben';
const  age = 45;
const job = 'Front end developer';
const city = 'London';

let html; //init

// Without template string

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';



// another Old way  to write it :
html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li> '+
'<li>Job: ' + job + '</li> '+
'<li>City 1: ' + city + '</li>'
;

// with template string (es6 ) template literal

function hello(){
  return 'Hello with javascript'
}

html =    `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age }</li> 
<li>Job: ${job}</li> 
<li>City 1: ${city}</li>
<li>${2+2}</li> 
<li>${hello()}</li>
<li>${age > 30? 'you are over 30' : 'youngster'}</li>
`;
document.body.innerHTML = html;