import React, { Component } from 'react'
import reusableCounter from './reusableCounter'

class ClickCounter extends Component {
    render() {
        const { count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
        )
    }
}

export default reusableCounter(ClickCounter, 10)