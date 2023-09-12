import React, { Component } from 'react'

class ClassEventClick extends Component {
    
    classClickHandler(){
        console.log('Button Clicked')
    }
    render() {
        return (
        <button onClick={this.classClickHandler}>Click Me</button>
        )
    }
}

export default ClassEventClick