// FUNCTION DECLARATIONS

// function greet(){
//   console.log('Hello');
// }
// greet();
//------------

// function greet(){
// return 'Hello';
// }
// console.log(greet());

// //----------
// function greet(firstName){
//   return 'Hello ' + firstName;
//   }
//   console.log(greet( 'Barri'));
  
//   //--------
//   function greet(firstName, lastName){
//     return 'Hello ' + firstName +' '+ lastName ;
//     }
//     console.log(greet( 'Barri', 'Faryad'));

    //-------------------- es5
    // function greet(firstName, lastName){
    //   if(typeof firstName === 'undefined'){firstName = 'Bart'}
    //   if(typeof lastName === 'undefined'){lastName = 'Faryad'}
    //   return 'Hello '+' '+ lastName ;
    //   }
    //   console.log(greet( ));

    //-------------------- ES6
    function greet(firstName = 'Bari', lastName = 'Zaghart'){
 
      return 'Hello '+firstName+ ' '+ lastName ;
      }
      console.log(greet( ));

  //FUNCTION EXPRESSION --with default

  const square = function(x = 3){
      return x*x;
  };
  // console.log(square());

  // Immidiatley INVOKE FUNCTION EXPRESSIONS - IIFEs
  // (function(){
  //   console.log('IIFE is on');
  // })();

  //useful for module----------------
  // (function(name){
  //   console.log('IIFE is on '+ name);
  // })('Barri');

  //PROPERTY METHODS

  const todo = {
    add: function(){
      console.log('Add todo.. ');
    },
    edit: function(id){
      console.log(`Edit todo ${id}`);
    } }

    todo.delete = function(){
      console.log('Delete todo ...');
    }
    todo.add();
    todo.edit(22);
    todo.delete(22);