import React, { Component } from 'react'

class Counter extends Component {
    //initialize count state to keep track of the counter value and we do this in the constructor
    constructor(props) {
        //super is the base class constructor method that must be called
        super(props)
        //state object
        this.state = {
            count: 0
        }
    }

    increment() {
        //do not mutate state directly! always use setState (when setState is called it will tell React to re-render the component )
        //if you mutate the state directly it will not re-render the component
        //need to be aware that calls to setState are asynchronous
        //if you want execute code only AFTER the state has been updated
        //setState allows for the state object, but also allows for a callback function
        //Whenever you need to execute code after the state has been changed, DO NOT place that code right after the setState method
        //INSTEAD.. place that code you want to execute as a call back function as a parameter in the setState method
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log(this.state.count) })

        //PREFERRED
        //represents the previous state of the component
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }), () => console.log(this.state.count))

    }

    //example to show how React groups together multiple setState calls into a single update for better performance
    //all these calls will be executed in one single go and the updated value doesn't carry over between the different calls of increment()
    //whenever you have to update the state based on what the previous state was..
    //we need to pass a function as an argument to the setState method instead of passing in an object 
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
