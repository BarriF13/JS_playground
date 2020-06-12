// Singleton pattern -- rarely use by teachers

const Singleton = (function(){

    let instance;

    function createInstance() {
      const object = new Object({name: 'Baba'});
      return object;
    }

      return {
        getInstance: function(){
          if(!instance){
             instance = createInstance();
          }
          return instance;
        }

    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // gives us true

// console.log(instanceA);