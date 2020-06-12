// for module we need webpack

// Basic Structure

//IIFE

// (function(){
//   // Declare private vars and functions
//   return{
//   // Declare public var and functions
//   }
// })();

const UICtrl = (function(){
// Private var
let text = 'Hello Cyrus';
// private function expression
const changeText = function(){
  const element = document.querySelector('h1');
  element.textContent = text;
}
  return{
   callChangeText: function() {
     changeText();
     console.log(text);
   }
  }
})();
UICtrl.callChangeText();
UICtrl.changeText(); // we can't access this because it is private