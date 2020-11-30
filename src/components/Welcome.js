//need to import React and the component class from react
import React, { Component } from 'react';

// class Welcome extends Component {
//     //render method that returns html
//     render() {
//using this keyword to access the props in class components
//         return <h1>Welcome, {this.props}</h1>
//     }

// }

//props is an object that contains the attribute and their values which have been passed from the parent component
//props value cannot be changed
/*
    props v state
    -props get passed to the component while state is managed within the component (ie function parameters(ie props in functional components and this.props in class components) versus variables declared in the function body)
    -props are generally passed down by the parent component and are immutable (they cannot be changed by the children components)
    -state is inside the component and the component has full control to change the state(ie useState Hook in functional components; this.state in class components)
*/
const Welcome = (props) => {
    console.log(props)
    return (
        <h1>Hello, kdkdk</h1>
    )
}


export default Welcome;