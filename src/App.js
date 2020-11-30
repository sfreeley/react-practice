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
