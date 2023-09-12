import React, {Component} from "react";

class MessageState extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome to SK Cinematics'
        }
    }

    changeMessage(){
        this.setState ({
            message: 'Thankyou for Subscription'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
    
}

export default MessageState