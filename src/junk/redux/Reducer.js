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