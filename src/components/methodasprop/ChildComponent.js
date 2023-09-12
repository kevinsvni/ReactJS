import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <h1>Child Component</h1>
        <button onClick={props.alertName}>Click Me</button> {/* Without parameters */}
        <br/><br/>
        <button onClick={()=>props.alertName('Bhumi Savani')}>Bhumi</button> {/* With parameters */}
    </div>

  )
}

export default ChildComponent