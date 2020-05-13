// Redux provides a helper createStore for creating a store. Its signature is as follows:
import { createStore } from 'redux';
 
createStore([reducer], [initial state], [enhancer]);

// The reducer is a function that accepts the current state, action and returns the new state. 
// The second argument is the initial state of the store. 
// This comes as a handy instrument to initialize our application with data that we already have. 
// This feature is the essence of processes like server-side rendering or persistent experience. 
// The third parameter, enhancer, provides an API for extending Redux with third party middlewares and basically plugs some functionally which is not baked-in. 
// Like an instrument for handling async processes.

// Once created, the store has four methods - getState, dispatch, subscribe and replaceReducer. 
// Probably the most important one is dispatch:
store.dispatch(changeVisibility(false));
// That is the place where we use our action creators. 
// We pass the result to them or, in other words, action objects to this dispatch method. 
// It then gets spread to the reducers in our application.

// In the typical React application we usually don’t use getState and subscribe directly because there is a helper 
// that wires our components with the store and effectively subscribes for changes. 
// As part of this subscription we also receive the current state so we don’t have to call getState ourself. 
// replaceReducer is kind of an advanced API and it swaps the reducer currently used by the store. 




// Exp of store with reducer and redux dev tool connect to it

import {createStore} from "redux"
import rootReducer from 'reducerPath';


const reduxdevTools =window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(rootReducer,[...initial state], reduxdevTools);

export default store;