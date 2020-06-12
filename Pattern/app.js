// for module we need webpack

// Basic Structure

//IIFE

// (function(){
//   // Declare private vars and functions
//   return{
//   // Declare public var and functions
//   }
// })();

// const UICtrl = (function(){
// // Private var
// let text = 'Hello Cyrus';
// // private function expression
// const changeText = function(){
//   const element = document.querySelector('h1');
//   element.textContent = text;
// }
//   return{
//    callChangeText: function() {
//      changeText();
//      console.log(text);
//    }
//   }
// })();
// UICtrl.callChangeText();
// UICtrl.changeText(); // we can't access this because it is private

// REVEALING MODULE PATTERN

const itemCtrl = (function(){
   let data =[];
   
   function add(item){
    data.push(item);
    console.log('Item Added...');
   }
   function get(id){
     return data.find(item =>{
       return item.id === id;
     });
   }

    return {
      //object literal -- to revealing above method
      add: add,
      get: get
    }
})();

itemCtrl.add({id: 1, name: 'Bobo'});
console.log(itemCtrl.get(1));