// propTypes

// Within propTypes, we define the type of every property and React provides hints in the console 
// if something unexpected gets sent.


// DefaultProps

// is another useful option. We may use it to set a default value of a component’s props so that 
// if the developer forgets to pass them, we have meaningful values available.


import React from 'react'
import PropTypes from 'prop-types';

const MyFct=(props)=> {
    return (
        <div>
        <h1>
        {props.text}
        {props.children}
      </h1>
        </div>
    )
}

//// propTypes
MyFct.propTypes = 
{
  text: PropTypes.string,
  //props.children
  //At the parent ==>  <MyFct text="Hello React" >  <span> community </span>  </MyFct>
  children: PropTypes.any
}; 


//DefaultProps
MyFct.defaultProps = 
{
  text: PropTypes.string
};

export default MyFct;

//PropTypes gives you hints in the console if a prop of a different type than expected is passed