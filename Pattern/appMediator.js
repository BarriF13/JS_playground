// Mediator use for Chat room 

const User = function(name){
this.name = name;
this.chatroom = null;

}
  User.prototype= {
    send: function(message, to){
      this.chatroom.send(message, this, to); // this is back to user


    },
    receive: function(message, from){
      console.log(`${from.name} to ${this.name} : ${message}`)

    },
   }

const Chatroom = function(){
  let users =  {};// list of users

  return {
    register: function(user){
      users[user.name] = user;
      user.chatroom = this; // current chatroom
    },
    send: function(message, from, to){
      if(to){
        // Single user message
        to.receive(message, from);
      } else {
        // this is a mass message 
        for(key in users) {
          if(users[key] !== from){
            users[key].receive(message, from);
          }
        }
      }
    }
  }
  
  }
  const p1 = new User('Barri');
  const p2 = new User('Cy');
  const p3 = new User('Anahit');

  const chatroom = new Chatroom();

  chatroom.register(p1);
  chatroom.register(p2);
  chatroom.register(p3);
  p1.send('Hello cy', p2);
  p2.send('Hello Sis', p3);
  p3.send('Barri you are the best student ever',p1);
  p1.send('I know you are all awesome');