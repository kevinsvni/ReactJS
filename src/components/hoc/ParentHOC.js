import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class ParentHOC extends Component {
  render() {
    return (
      <div>
        <h2>Parent HOC</h2>
        <br/>
        <ClickCounter name="Kevin"/>
        <br/>
        <br/>
        <HoverCounter />
      </div>
    )
  }
}

export default ParentHOC