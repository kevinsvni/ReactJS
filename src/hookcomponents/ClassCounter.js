import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }
    incrementCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        this.setState(prevState => {
            return { counter: prevState.counter + 1 }
        })
    }
    render() {
        return (
            <button onClick={this.incrementCounter}>Class Counter - {this.state.counter}</button>
        )
    }
}

export default ClassCounter