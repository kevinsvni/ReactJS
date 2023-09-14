import React, { Component } from 'react'
import RefsDemo from './RefsDemo'
import CallbackRefsDemo from './CallbackRefsDemo'

class ParentRefsDemo extends Component {
  render() {
    return (
      <div>
        <h3>ParentRefsDemo</h3>
        <h5>RefsDemo</h5>
        <RefsDemo />
        {/* <br/><br/>
        <h5>CallbackRefsDemo</h5>
        <CallbackRefsDemo /> */}
      </div>
    )
  }
}

export default ParentRefsDemo