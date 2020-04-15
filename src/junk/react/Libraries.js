// A brief introduction to React APIs and their uses.

// React is only the view layer for your application. 
// There is some internal state management offered by React, 
// but apart from this, it is only a component library which renders HTML for your browser. 
// Everything else can be added from APIs (e.g. browser API, DOM API), 
// JavaScript functionalities or external libraries. 
// It’s not always simple to choose the right library for complementing your React application, 
// but once you have a good overview of the different options, 
// you can pick the one which fits best to your tech stack.




// For instance, fetching data in React can be done with the native fetch API like so. 
// Lines 22 and 23 define constant variables that return a JSON based on a query from a website (API).
//  Lines 35-37 in the componentDidMount() method fetch the data 
//  and set the title within the state to a title returned in the JSON file from the API given here.


import React from 'react';
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Hello!',
    };
  }

 componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ title: data.hits[0].title }));
 	}

	render() {
    return (
      <h1> {this.state.title} </h1>
    );
  }
}






// But it is up to you to use another library to fetch data in React. 
//"""Axios""" is one popular choice for React applications:

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios.get('https://api.mydomain.com')
      .then(data => this.setState({ data }));
  }

  render() {
    // JSX
  }
}

export default App;