// The two terms controlled and uncontrolled are very often used in the context of forms management.

// Controlled Inputs #

// A controlled input is an input that gets its value from a single source of truth.
// For example, the App component below has a single <input> field which is controlled:

import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "hello" };
  }
  render() {
    return <input type="text" value={this.state.value} />;
  }
}

//   The result of this code is an input element that we can focus,
//   but can’t change. It is never updated because we have a single source of truth - the App's component state.

// To make the input work as expected we have to add an onChange handler and update the state
// (the single source of truth), which will trigger a new rendering cycle and we will see what we typed.

class App extends React.Component {
  state = { value: "hello" };

  _handleInputChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this._handleInputChange}
      />
    );
  }
}



// Uncontrolled Input # 


// On the other hand, we have uncontrolled input, 
// where we let the browser handle the user’s updates. 
// We may still provide an initial value by using the defaultValue prop but after that,​ 
// the browser is responsible for keeping the state of the input.

class App extends React.Component {
   
      state = { value: 'hello' };
    
    render() {
      return <input type='text' defaultValue={ this.state.value } />
    }
  };

//   That <input> element above is a little bit useless because the user updates the value but our component has no idea about that. 
//   We then have to use Refs to get access to the actual element.

class App extends React.Component {
    
      state = { value: 'hello' };
      _handleInputChange() {
        this.setState({ value: this.input.value });
      }
    
    render() {
      return (
        <input
          type='text'
          defaultValue={ this.state.value }
          onChange={ this._handleInputChange }
          ref={ input => this.input = input }/>
      );
    }
   
  };

//   The ref prop receives a string or a callback. 
//   The code above uses a callback and stores the DOM element into a local variable called input. 
//   Later when the onChange handler is fired we get the new value and send it to the App's state.

// Using a lot of refs is not a good idea. 
// If it happens in your app consider using controlled inputs and re-think your components.



// =============>   uncontrolled inputs are kind of an anti-pattern and would avoid them when possible.
