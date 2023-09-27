import React, { Component } from 'react'
import ComponentE from './ComponentE';
import UserContext from './userContext';

class ComponentD extends Component {
    // static contextType = UserContext
    render() {
        return (
            <div>
                <h4>Component D context {this.context}</h4>
                <ComponentE />
            </div>
        )
    }
}

ComponentD.contextType = UserContext

export default ComponentD