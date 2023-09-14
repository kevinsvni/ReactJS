import React, { Component } from 'react'

class CallbackRefsDemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputCallbackRef = React.createRef()
    this.callbackRef = null
    this.setCallbackRef = (element) => {
      this.callbackRef = element
    }
  }

  componentDidMount(){
    if(this.callbackRef){
      this.callbackRef.focus()
    }
  }

  clickHandlerCb = () => {
    alert(this.inputCallbackRef.current.value)
}

  render() {
    return (
      <div>
        <input type="text" id="name"  />
            <br/><br/>
            <input type="text" id="name" ref={this.setCallbackRef} />
            <br/><br/>
            <button onClick={this.clickHandlerCb}>Click</button>
      </div>
    )
  }
}

export default CallbackRefsDemo