import React, {Component} from "react";

class EventHandlerBinding extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'My name is : Kevin'
      }

      // Method 3
      this.changeMessage = this.changeMessage.bind(this)     // Method using binding in the class constructor          -     method 3
    }

    // Method 1, 2 & 3
    changeMessage(){
        this.setState({
            message: 'My name is : Kevin Savani'
        }) 
    }

    // // Method using binding in the class constructor          -     method 4
    // changeMessage = () => {
    //     this.setState({
    //         message: 'My name is : Kevin Savani'
    //     }) 
    // }

    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick = {this.changeMessage.bind(this)}>Handler Binding Method 1</button>     {/* Method using binding handler in the render method          -     method 1  */}
                <br/><br/>
                <button onClick = {() => this.changeMessage()}>Handler Binding Method 2</button>     {/* Method using arrow function approach          -     method 2  Easy for passing parameters*/}
                <br/><br/>
                <button onClick  = {this.changeMessage}>Handler Binding Method 3</button>     {/* Method using binding in the class constructor          -     method 3  Best Option*/}
                <br/><br/>
                <button onClick  = {this.changeMessage}>Handler Binding Method 4</button>     {/* Method using arrow function as a class property          -     method 4 */}
                <br/><br/>
            </div>
        )
    }
}

export default EventHandlerBinding