import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (username) => {
                return <h3>Hello {username}, from Component E</h3>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentE