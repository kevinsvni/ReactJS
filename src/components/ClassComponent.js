import React, { Component } from 'react'

class ClassComponent extends Component{
    render(){
        return <h1>Class Component ({this.props.lname})</h1>
    }

    // // Destructured props
    // render(){
    //     const {name, lname} = this.props
    //     return <h1>Class Component ({name + " " + lname})</h1>
    // }
}

export default ClassComponent