import React, { Component } from 'react'
import ComponentC from './ComponentC';
import {UserProvider} from './userContext';

class ParentContext extends Component {
  render() {
    return (
      <UserProvider value="Kevin">
        <ComponentC />
      </UserProvider>
    )
  }
}

export default ParentContext