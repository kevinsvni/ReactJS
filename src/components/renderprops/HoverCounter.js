import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        const {count, incrementCounter} = this.props
        return (
            <h3 onMouseOver={incrementCounter}>Hovered {count} times</h3>
        )
    }
}

export default HoverCounter