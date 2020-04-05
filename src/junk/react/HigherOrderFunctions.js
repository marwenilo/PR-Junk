//Higher-Order Functions in React

//Basically, a Higher-Order function is a function which returns a function. 
// By using JavaScript ES6 arrow functions, you can make a higher-order function more concise. 
// Furthermore, this shorthand version makes it more attractive composing functions into functions.

import React from 'react';

export const doIncrement = state =>
  ({ counter: state.counter + 1 });

export const doDecrement = state =>
  ({ counter: state.counter - 1 });

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(doIncrement);
  }

  onDecrement = () => {
    this.setState(doDecrement);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}