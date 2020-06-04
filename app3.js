// creating array

const num = [45, 66,23, 44 ,36,4]; // one way of making an array

const num2 = new Array(22 ,67 ,88,1,21,13);

const cars = ['Benz', 'lamborghini', 'ferrari', 'land rover', 'BMW' ];
const mixed = ['Barri', 23, 'apple', true , null,]; //every type 

let value;


//Get array length
value = num.length;
// check is it is array
value = Array.isArray(num);
// Get single value 
value = num[3];
//insert to array
num[2]= 245;
//find index
value = num.indexOf(245);


//mutating arrays-----------change 
// add in the end
num.push(300);
//add on to front
num.unshift(400);
// Take off from end
num.pop();
//Take off from the front
num.shift();
//Splice values-crack
num.splice(0,3);
// reverse
num.reverse();

// Concatenate array
value = num.concat(num2);
value = cars.sort();
value = num.sort();

// Compare function 

value = num.sort(function(x ,y){
  return x-y;
});
// Reverse sort 
value = num.sort(function(x ,y){
  return y-x;
});
Find
function under50(nums){
  return nums < 50
}


value = num.find(under50)

function over50(nums){
  return nums > 50
}
value = num.find(over50)
console.log(num);
console.log(value);