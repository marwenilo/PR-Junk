// Class Object Creation & Initializing Class Variables

// The entity described in this example is a "Car".’ 
// A new object can be created with the new keyword and the ‘constructor’ of the class can be called 
// at the same time as on line 33 to assign values to the class’s properties, 
// namely the color and the model. The color of the me instance of the class Car is assigned 
// the value ‘red‘,’ and the model is assigned ‘bmw‘.’

class Car{
    constructor(color, model,engineCap,registrationNum){
        this.color=color;
        this.model=model;
        this.engineCap=engineCap;
        this.registrationNum=registrationNum
    }
    getColor(){
      return  `${this.color}`
    }
     getModel(){
      return  `${this.model}`
    }
     setColor(color){
         this.color=color
         
 return `${this.color}`;
    }
     setModel(model){
     
     this.model=model
       return `${model}`;
    }
}
var myCar = new Car('red', 'bmw');
console.log(myCar.setColor())
console.log(myCar.setModel())