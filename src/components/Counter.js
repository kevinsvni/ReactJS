import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    increaseCounter(){
        this.setState({
            counter: this.state.counter + 1
        }, 
        ()=>{
            console.log(this.state.counter)     // If certain code has to be executed after the state has been updated, place that code inthe callback function which is the second argument of the setState method.
        })
        
    }

    decreaseCounter(){
        this.setState((prevState) => ({        //Use prevState when you have to update state bsed on the previous state value, pass in a function as an argment instead of the regular object.
            counter: prevState.counter - 1
        }), 
        // this.setState((prevState, props) => ({       // If you want to update using props  
        //     counter: prevState.counter + props
        // }),
        ()=>{
            console.log(this.state.counter)
        })
        
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <button onClick={() => this.increaseCounter()}>Increase</button> &nbsp;
                <button onClick={() => this.decreaseCounter()}>Decrease</button>
            </div>
        )
    }
}

export default Counter

