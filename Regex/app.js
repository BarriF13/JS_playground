let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search
// console.log(re);
// console.log(re.source);

// exec()- Return result in an array or null if doesn't match

// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// const result = re.test('Hello'); // it is case sensitive, so to make it not case sensitive we put i after /hello/i;
// console.log(result);


// Match - return result array or null

// const str = ' Hello you';
// const result = str.match(re);
// console.log(result);

// search() - return index of the first match if not found return -1

// const str = 'ola Hello you ';
// const result = str.search(re);
// console.log(result);

// Replace - return new string with some or all matches of a patter---cool

const str = 'ola Hello you ';
const newStr = str.replace(re, 'hoy');
console.log(newStr);