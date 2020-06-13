// Observers are very useful 
//-1 constructor function

function EventObserver() {

  this.observers = []; // this property is represent functions that passed into it 

}
EventObserver.prototype = { //it's like EventObserver.prototype.subscribe = bla bla -- we put two in one go
  subscribe: function(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  }, 
  unsubscribe: function(fn) {
    // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item; 
      }
    });
    console.log(`You are now unsubscribe from ${fn.name}`);
  },
  fire: function(){
    this.observers.forEach(function(item){
      item.call();
    });
  }
}
const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurMillisecond);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurMillisecond);
});

document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
});

document.querySelector('.sub-s').addEventListener('click', function(){
  click.subscribe(getCurSecond);
});


document.querySelector('.unsub-s').addEventListener('click', function(){
  click.unsubscribe(getCurSecond);
});

// Click Handler
const getCurMillisecond = function(){
  console.log(` Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSecond = function(){
  console.log(` Current Seconds: ${new Date().getSeconds()}`);
}