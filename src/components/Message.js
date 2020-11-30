import React, { Component } from 'react';

class Message extends Component {
    //create a state object and initialize it and is usually done in the class constructor
    constructor() {
        //call super method --> required because we extend React's component class
        //and a call has to be made to the base class constructor
        super()
        this.state = {
            //initializing a property to set into state
            message: 'Welcome, Visitor'
        }
    }

    //button click handler method
    changeMessage() {
        console.log("hello")
        //accepts an object which sets the new state of the component
        //method to call to alter the state of a class component
        //
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {/* we have to bind the state value in this render function*/}
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>
                    Subscribe
                </button>
            </div>

        )
    }
}

export default Message;