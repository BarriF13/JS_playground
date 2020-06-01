const firstName = "Cher";
const lastName = "Donnatella";
const weight  = 52;
const str = 'Do you want to play a magic game'

let value;

value = firstName + lastName;

//concatenation for space in between + +
value = firstName + ' ' + lastName;

//Append
value = 'Barri ';
value += ' debugger';

//old way of concatenation 
value = 'What is up '+ firstName + ' wanna say something' + lastName

// Escaping with \
value = 'That\'s , great' ; 

//length 
value = firstName.length; //length here is property not method so no need of ()

// concatenation  by using a method contact 
value = firstName.concat(' ', lastName);

// Change case
value = firstName.toLowerCase();

//certain character
value = firstName[0];

// indexOf()
value = firstName.indexOf('r');
value = firstName.lastIndexOf('e'); // count from the end

// charAt -- opposite of index of 
value = firstName.charAt(3);

// last character 
value = firstName.charAt(firstName.length -1);

//Substring()
value = lastName.substring(0, 4)

//slice() mostly use for arrays
value = lastName.slice(0, 3);
value = lastName.slice(-3);

//split
value = str.split(' ');

//replacing a word
value = str.replace('magic' , 'boring');

// Includes 
value = str.includes('you');


console.log( value );


