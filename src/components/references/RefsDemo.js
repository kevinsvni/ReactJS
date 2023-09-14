import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
        <div>
            <input type="text" id="name"  />
            <br/><br/>
            <input type="text" id="name" ref={this.inputRef} />
            <br/><br/>
            <button onClick={this.clickHandler}>Click</button>
        </div>
        )
    }
}

export default RefsDemo