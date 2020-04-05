//Arrow Functions are a more concise way of writing a function in JavaScript. 
//They are frequently used in React to make things more efficient and simpler (Event Handling, preventing bugs, etc.).


// JavaScript ES5 function
function getGreetingFunc() {
    return 'Welcome to JavaScript';
  }
  
  // JavaScript ES6 arrow function with body
  const getGreetingArrow1 = () => {
    return 'Welcome to JavaScript';
  }
  
  // JavaScript ES6 arrow function without body and implicit return
  const getGreetingArrow2 = () =>
    'Welcome to JavaScript';
  
  console.log(getGreetingFunc());
  console.log(getGreetingArrow1());
  console.log(getGreetingArrow2());



  const students = [
    { ID: 1, present: true},
    { ID: 2, present: true},
    { ID: 3, present: false}, 
  ];
  
  const presentStudents = students.filter(function(student){return student.present;});
  const presentStudentss = students.filter(student => student.present);
  console.log(presentStudents);
  console.log(presentStudentss);


  //=====> As arrow function do not rebind this so it makes it easier for developers to debug the code 
         //and prevent any errors caused by making use of this within callbacks