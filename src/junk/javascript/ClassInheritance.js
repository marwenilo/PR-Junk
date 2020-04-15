// Inheritance in JavaScript

// Usually, classes are used for inheritance in object-oriented programming. 
// inheritance enables new classes to take on the properties and methods of existing classes. 
// A class that another class inherits is called a superclass or base class. 
// A class that inherits from a superclass is called a subclass or derived class. 
// In JavaScript, the extends keyword can be used to inherit one class from another class as shown in the code below. 
// So, the derived class, ReactDeveloper, inherits all the abilities from the base class, 
// Developer, and also adds its specialized capabilities, namely the getJob() method to it.


//====> superclass or base class
class Developer {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getName() {
      return this.firstname + ' ' + this.lastname;
    }
  }
  //====> subclass or derived class
  class ReactDeveloper extends Developer {
    getJob() {
      return 'React Developer';
    }
  }
  
  var me = new ReactDeveloper('Robin', 'Wieruch');
  
  console.log(me.getName());
  console.log(me.getJob());