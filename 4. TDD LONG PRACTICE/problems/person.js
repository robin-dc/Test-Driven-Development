class Person {
  // Your code here
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    return `Hello ${this.name}`
  }
  visit(otherPerson){
    return `${this.name} visited ${otherPerson}`
  }
  switchVisit(otherPerson){
    otherPerson.visit(this);
  }
  update(obj){
    if(typeof obj !== 'object'){
      throw new TypeError('argument must be an object');
    }
    if(!obj.name || !obj.age){
      throw new TypeError('No name or age property on the passed object');
    }
    this.name = obj.name
    this.age = obj.age
    return this
  }
  tryUpdate(obj){
    try{
      this.update(obj)
      return true
    }
    catch(err){
      return false
    }
  }
  static greetAll(obj){
    return obj.map(item => item.sayHello(item));
  }
}

module.exports = Person;
