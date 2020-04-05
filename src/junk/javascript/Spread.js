//Spread Operator


let a = [1,2,3];
let b = [4,5,6];
let c = [...a, ...b]; //spread operator
console.log("c: " + c);


//You can easily add some elements in the middle of the two arrays: [...a, 'something', ...b];

//You can clone arrays using this operator: clone = [...a];

const person = { name: "Jhon"};
const student = { ID: "21", GPA: "3.0"};

const new_object = { ...person, ...student, semester: '3'};
console.log(new_object);