import React, { Component } from 'react'

class UserGretting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //short circuit operator --> will rendering something only if it is true, otherwise, it will return nothing
        return (
            this.state.isLoggedIn && <div>Welcome wwwwww</div>
        )

        //3rd approach ternary operator
        // return (
        //     this.state.isLoggedIn ? <div>Welcome ssss</div> : <div>Welcome Guest</div>
        // )

        //2nd approach
        //variable storing the element being rendered
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome sssss</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }
        // return message;


        //1st approach
        //NOTE: if/else statements do not work inside jsx
        // if (this.state.isLoggedIn) {
        //     return <div>
        //         Welcome, kdkdkdk!
        //     </div>
        // }
        // else {
        //     return <div>
        //         Welcome, Guest!
        //     </div>
        // }

    }
}

export default UserGretting
