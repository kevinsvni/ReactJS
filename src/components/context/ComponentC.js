import React, { Component } from 'react'
import ComponentD from './ComponentD';
import { UserConsumer } from './userContext';

class ComponentC extends Component {
    render() {
        return (
            <ComponentD />
        )
    }
}

export default ComponentC