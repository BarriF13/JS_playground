// Observers are very useful ---ES6
//-1 constructor function

class EventObserver {
  constructor(){
  this.observers = []; // this property is represent functions that passed into it 
  }

  subscribe (fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  }
  unsubscribe (fn) {

    this.observers = this.observers.filter(function(item){
      if(item !== fn){
        return item; 
      }
    });
    console.log(`You are now unsubscribe from ${fn.name}`);
  }

  fire(){
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