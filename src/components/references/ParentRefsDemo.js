import React, { Component } from 'react'
import RefsDemo from './RefsDemo'
import CallbackRefsDemo from './CallbackRefsDemo'
import RefsWithClassComp from './RefsWithClassComp'
import FRParentInput from './FRParentInput'

class ParentRefsDemo extends Component {
  render() {
    return (
      <div>
        <h3>ParentRefsDemo</h3>

        {/* <h5>RefsDemo</h5>
        <RefsDemo /> */}

        {/* <br/><br/>
        <h5>CallbackRefsDemo</h5>
        <CallbackRefsDemo /> */}

        {/* <h5>RefsWithClassComponents</h5>
        <RefsWithClassComp /> */}
        
        <h5>Forwarding Refs</h5>
        <FRParentInput />

      </div>
    )
  }
}

export default ParentRefsDemo