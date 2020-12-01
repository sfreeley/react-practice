import React, { Component } from 'react';
import './App.css';
// import Welcome from './components/Welcome';
import Message from './components/Message';

//class components are ES6 classes- can also receive props as input and return html
/*JSX- JavaScript XML (JSX) - extension to the JS language syntax
    -allows you to write XML-like code for elements and components
    -transpiles to pure JS understood by the browsers
    -JSX translates into React.createElement(), which in turn uses the React library
    -otherwise, you would need to use React.createElement() with what you are rendering
*/

/*
  Binding event handlers in React: 'this' keyword in JS -->
  in event handlers, the value of this keyword is undefined and therefore we need to bind the event handler:
  to bind you can:
  performance issue: re-renders each time ==> 1. bind the event handler in the render method: ie this.clickHandler.bind(this)
  performance issue: re-renders each time ==> 2. bind the event handler in the render method by calling it with an arrow function: ie onClick={() => this.clickHandler()}
  binding only happens once in the class constructor ==> 3. bind the event handler in the constructor: this.clickHandler = this.clickHandler.bind(this) --> then you can just use this.clickHandler in the render method
  4. bind the event handler using an arrow function as a class property: clickHandler = () => {your action... this.setState({.......})}

  PREFERRED: 3 or 4; smaller apps performance may not be an issue with 1 or 2... 2 is better than the first option
*/

class App extends Component {

  render() {
    return (
      <div className="App">
        <Message />
      </div>
    )
  };
}

export default App;
