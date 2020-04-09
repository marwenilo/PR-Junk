// Object Creation in JavaScript

// Classes are relatively new to Javascript. 
// Objects are a lot like classes. 
// Have a look at the code sample below. 
// Here, we define three objects computer, computer2 and computer 3. 
// Each of them has the properties brand, RAM and clockspeed. In addition, 
// computer3 has the method printRam(). 
// ​Note that objects can be defined on one line as computer is defined or can span multiple lines as the other two are.


let computer = { brand : 'HP', RAM : '8 GB', clockspeed : "2 GHz"};

// object definitions can have spaces and newlines!
let computer2 = { 
  brand : 'HP',
  RAM : '8 GB',
  clockspeed : "2 GHz"
};

// Objects can also have 'functions' called methods
let computer3 = {
  brand : 'HP',
  RAM : '8 GB',
  clockspeed : "2 GHz",
  
  printRam() {
    console.log(this.RAM)
  }
}
console.log(computer)
console.log(computer2)
console.log(computer3)