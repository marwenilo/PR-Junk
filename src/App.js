import React from "react";

// import ReactMarkdown from "react-markdown"
import "./App.css";
// https://www.npmjs.com/package/react-simple-code-editor
// https://www.npmjs.com/package/jshint
function App() {
  const input = `
  {
    showUsers && (
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    )}
    `
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerContainer"></div>
        <div className="bodyContainer">
          <h1>Hello There</h1>
          <p>
          
            {" "}
            My name is
            <strong> Marwen Magri</strong> and in this site i'm building right
            now you will find a lot of useful react UI components and many of
            <strong> "JavaScript-React-Redux" </strong>
            code Junk.
          </p>
          <div>
  {/*<p>if you only return one side of the conditional rendering anyway, is using the && operator:</p>*/}
          
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
