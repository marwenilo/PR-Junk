// The typical action in Redux is merely an object with a type property. 
// Everything else in that object is considered to be context specific data and it is not related to the pattern, 
// but to your application logic. For example:

const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY';
const action = {
  type: CHANGE_VISIBILITY,
  visible: false
}

// It is a good practice that we create constants like CHANGE_VISIBILITY for our action types. 
// It happens that there are lots of tools/libraries that support Redux and solve different problems which do require the type of the action only. 
// So it is just a convenient way to transfer this information.

// The visible property is the meta data that we mentioned above. 
// It has nothing to do with Redux. It means something in the context of the application.


// Every time when we want to dispatch a method we have to use such objects. 
// However, it becomes too noisy to write them over and over again. 
// That is why there is the concept of action creators. 
// An action creator is a function that returns an object and may or may not accept an argument which directly relates to the action properties. 
// For example the action creator for the above action looks like this:

const changeVisibility = visible => ({
    type: CHANGE_VISIBILITY,
    visible
  });
  
  changeVisibility(false);
  // { type: CHANGE_VISIBILITY, visible: false }

//   Notice that we pass the value of the visible as an argument and we don’t have to remember (or import) the exact type of the action. 
//   Using such helpers makes the code compact and easy to read.