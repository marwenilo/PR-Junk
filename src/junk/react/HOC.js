
// the higher-order component uses various JavaScript and not React relevant techniques:
// arrow functions, higher-order functions, a ternary operator, destructuring and the spread operator.


const withLoading = Component => ({ isLoading, ...props }) =>
  isLoading
    ? <p>Loading</p>
    : <Component { ...props } />