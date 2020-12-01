import React, { Component } from 'react';
import './App.css';
// import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Overview from './components/Overview';

//class components are ES6 classes- can also receive props as input and return html
/*JSX- JavaScript XML (JSX) - extension to the JS language syntax
    -allows you to write XML-like code for elements and components
    -transpiles to pure JS understood by the browsers
    -JSX translates into React.createElement(), which in turn uses the React library
    -otherwise, you would need to use React.createElement() with what you are rendering
*/


class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      //this is what will handle what is typed into the input field
      task: "",
      //empty array will hold the individual task that is typed into the input field and submitted
      tasks: []
    }
  }

  handleFieldChange = (e) => {
    //changing the state of the input with what is typed in by the user
    this.setState({
      task: e.target.value
    })
  }



  submitTask = (e) => {

    //do not want the form to refresh when we submit it
    e.preventDefault();
    //changing state of the tasks array
    this.setState((prevState) => ({
      //adding whatever was submitted in the form into our tasks array
      tasks: this.state.tasks.concat(this.state.task),
      //the input field should then be cleared so we can add another task
      task: "",
    }))
  }

  render() {
    const { task, tasks, number } = this.state;
    return (
      <div className="App">
        <Counter />
        <Message name="hello" />
        <form onSubmit={this.submitTask}>
          <label htmlFor="taskInput">Enter a Task</label>
          <input value={task} onChange={this.handleFieldChange} type="text" id="taskInput" />
          <div>
            <button type="submit" >Submit</button>
          </div>
        </form>
        <Overview tasks={tasks} number={number} />
      </div>


    )
  };
}

export default App;
