import React, { Component } from 'react'
import reusableCounter from './reusableCounter'

class HoverCounter extends Component {
    render() {
        const { count, incrementCount} = this.props
        return (
            <h5 onMouseOver={incrementCount}>Hovered {count} times</h5>
        )
    }
}

export default reusableCounter(HoverCounter,5)