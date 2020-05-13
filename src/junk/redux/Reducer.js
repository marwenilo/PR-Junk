// The reducer function is probably the most beautiful part of Redux. 


// There are two characteristics of the reducer that are quite important and without them we basically have a broken pattern.

// It must be a pure function - it means that the function should return the exact same output every time, given the same input.

// It should have no side effects - stuff like accessing a global variable, making an async call or waiting for a promise to resolve have no place in here.

// Here is a simple counter reducer:


const counterReducer = function (state, action) {
    switch (action.type) {
        case ADD:
             return { value: state.value + 1 };
        case SUBTRACT:
             return { value: state.value - 1 };
        default:
             return { value: 0 };
  }
}

// There are no side effects and we return a brand new object every time. 
// We accumulate the new value based on the previous state and the incoming action type.



// combineReducers

// Redux comes with a helper that allows us to target a specific part of the state and assign a reducer to it. 
// It is called combineReducers:
//if working at the store
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
  counter: function A() { ... },
  visible: function B() { ... }
});
const store = createStore(rootReducer);
//if working on a rootReducer file
const rootReducer = combineReducers({
    counter: counterReducer,
    visible: visibilityReducer
  });
// Function "A" receives only the counter slice as a state and needs to return only that part. 
// The same goes for "B", it also receives only the counter slice as a state. 
// Accepts a boolean (the value of visible) and must return a boolean.


🏹 🏹 🏹 🏹 🏹 🏹 
// Selectors 

// we know that our state is usually divided into different parts. 
// We have dedicated reducers to update the data but when it comes to fetching it we still have a single object. 
// Here is the place where the selectors come in handy. 
// The selector is a function that accepts the whole state object and extracts only the information that we need. 
// For example in our small app we need two of those:
const getCounterValue = state => state.counter.value;
const getVisibility = state => state.visible;
// Selectors come with this stuff but they are also contextual and may contain logic. 
// Since they have access to the whole state they are able to answer business logic related questions. 
// Like for example “Is the user authorized to do X while being on page Y”. 
// This may be done in a single selector.