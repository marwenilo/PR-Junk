// The 'this' Keyword & Binding in JavaScript

// the value of this depends on what context it is used in. 
// So, if it is used in a function, it’s value will depend on how that function is invoked, i.e., the call site.




//*********************

🏹 🏹 🏹 🏹 🏹 🏹 
// ===> *Left of the Dot Rule* <===


// Whatever is to the left of the dot is what this is. 
// For example, we call getName() first through the me object and hence firstname and lastname of the me object, i.e., 
// ‘Robin’ Wieruch’ get printed. Then we call getName() through the hobbit object and 
// so this refers to that hobbit object and prints its attributes.

class Developer {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getName() {
      return `${this.firstname} ${this.lastname}`;
    }
  }
  
  var me = new Developer('Robin', 'Wieruch');
  console.log(me.getName()); // 'this' is me
  var hobbit = new Developer('Frodo', 'Baggins');
  



//*********************

🏹 🏹 🏹 🏹 🏹 🏹 
// ===> *call() & apply()   * <===

// Consider the code block below. 
// The function, printName() is bound explicitly to the me object of the Developer class on line 72 using the call() function. 
// Furthermore, if printName() is called without any object bound to it, 
// as on line 75 it prints the first and last names as "undefined" because this is undefined. 
// Arguments can be passed to a function using call() as on line 85. 
// However,  if you do not want to pass each argument individually and instead pass all your arguments as an array, 
// you can use the apply() function as on line 88.


class Developer {
constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function() {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// '.call()' can be used to explicitly bind a function to an object
printName.call(me);

// printName() is not bound to an object so 'this' is undefined
printName();

var printInfo = function(lang1, lang2, lang3) {
  console.log(`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

// Create an array of languages
languages = ['Javascript','C++', 'Python'];

// Pass each argument individually by indexing the array
printInfo.call(me, languages[0], languages[1], languages[2]);

// Pass all the arguments in one array to .apply()
printInfo.apply(me, languages);






//*********************

🏹 🏹 🏹 🏹 🏹 🏹 
// ===> *bind()* <===

// When called on a function, .bind() sets a this context and returns a new function with a bound this context. Consider the code below.
class Developer{ 
constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function() {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer('Robin', 'Wieruch');

// Here we bind the me object to the printName() function and get a new function called newPrintName()
const newPrintName = printName.bind(me);

// bound newPrintName() prints appropriately
newPrintName();

// unbound printName() prints undefined
printName();