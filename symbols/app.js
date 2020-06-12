// Factory Pattern -- creating more objects

function MemberFactory(){
  //Func expression
  this.createMember = function(name, type){
    let member;

    if(type === 'simple'){
      member = new SimpleMembership(name);
    } else if(type === 'standard') {
      member = new StandardMembership(name);
    } else if(type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function(){
      console.log(`${this.name} (${this.type}): ${this.cost} `)
    }

    return member;
  }
}

// now we need to make constructors for simple - standard - super membership
const SimpleMembership = function(name){
  this.name = name;
  this.cost = '£5';
}
const StandardMembership = function(name){
  this.name = name;
  this.cost = '£15';
}
const SuperMembership = function(name){
  this.name = name;
  this.cost = '£35';
}

const members = [];
const factory = new MemberFactory(); // gives us specific members

members.push(factory.createMember('Barri', 'super'));
members.push(factory.createMember('Cyrus', 'standard'));
members.push(factory.createMember('Ana', 'simple'));

// console.log(members); //this gives us full object

members.forEach((member)=>{
  member.define();
})