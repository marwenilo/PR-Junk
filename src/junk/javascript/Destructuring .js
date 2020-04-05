//Destructuring

const student = {
    ID: '21',
    name: 'Jhon',
    GPA: '3.0',
  };
  
    const id = student.ID;
    const name = student.name;
    const GPA = student.GPA;

  //or

  const {ID, name, GPA} = student;


  // no destructuring
const users = this.state.users;
const counter = this.state.counter;

// destructuring
const { users, counter } = this.state;

//Another great feature is the rest destructuring. 
//It is often used for splitting out a part of an object, 
//but keeping the remaining properties in another object.
// rest destructuring
const { users, ...rest } = this.state;





  console.log(id);
  console.log(name);
  console.log(GPA);