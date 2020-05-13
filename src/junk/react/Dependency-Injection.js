// Many of the modules/components that we write have dependencies. 
// Proper management of these dependencies is critical for the success of the project. There is a technique (most people consider it a pattern) 
// called dependency injection that helps to solve the problem.

// In React the need for dependency injector is easily visible. Let’s consider the following application tree:

// Title.js
export default function Title(props) {
    return <h1>{ props.title }</h1>;
  }
  
  // Header.js
  import Title from './Title.js';
  
  export default function Header() {
    return (
      <header>
        <Title />
      </header>
    );
  }
  
  // App.js
  import Header from './Header.js';
  
  class App extends React.Component {
    state = { title: 'React in patterns' };
    
    render() {
      return <Header />;
    }
  };



//   The string “React in patterns” should somehow reach the Title component. 
//   The direct way of doing this is to pass it from App to Header and then Header pass it down to Title. 
//   However, this may work for these three components but what happens if there are multiple properties and deeper nesting. 
//   Lots of components will act as a proxy, passing properties to their children.

// The higher-order component may be used to inject data. 
// Let’s use the same technique to inject the title variable:

// inject.js
const title = 'React in patterns';

export default function inject(Component) {
  return class Injector extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          title={ title }
        />
      )
    }
  };
}

// -----------------------------------
// Header.js
import inject from './inject.js';
import Title from './Title.js';

let EnhancedTitle = inject(Title);
export default function Header() {
  return (
    <header>
      <EnhancedTitle />
    </header>
  );
}
// The title is hidden in a middle layer (higher-order component) where we pass it as a prop to the original Title component. 
// That’s all nice but it solves only half of the problem. 
// Now we don’t have to pass the title down the tree but how this data reaches the inject.jsx helper.


🏹 🏹 🏹 🏹 🏹 🏹 
// ====>Using React’s context (v. 16.3 and above)

// For years the context API was not really recommended by Facebook. They mentioned in the official docs that the API is not stable and may change. 
// And that is exactly what happened. 
// In version 16.3, we got a new one which is more natural and easy to work with.


// We will start by defining a file that will contain our context initialization:

//context.js
import { createContext } from 'react';

const Context = createContext({});

export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

// createContext returns an object that has .Provider and .Consumer properties. 
// Those are actually valid React classes. The Provider accepts our context in the form of a value prop. 
// The consumer is used to access the context and basically read data from it. 
// And because they usually live in different files it is a good idea to create a single place for their initialization.

// Let’s say that our App component is the root of our tree. That is where we have to pass the context.

import { Provider } from './context';
/***************************************************/
const context = { title: 'React In Patterns' };
/***************************************************/
class App extends React.Component {
  render() {
    return (
      <Provider value={ context }>
        <Header />
      </Provider>
    );
  }
};
// The wrapped components and their children now share the same context. 
// The <Title> component is the one that needs the title string so that is the place where we use the <Consumer>.

import { Consumer } from './context';

function Title() {
  return (
    <Consumer>{
      ({ title }) => <h1>Title: { title }</h1>
    }</Consumer>
  );
}
// Notice that the Consumer class uses the function as children (render prop) pattern to deliver the context.



🏹 🏹 🏹 🏹 🏹 🏹 
// Using the module system 
