import React, { Component } from 'react'

import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kevin'
      }
    }

    componentDidMount(){
        setInterval(() => {
        this.setState({
            name: 'Kevin'
        })
    }, 2000)
    }
     
    render() {
        console.log('********** Parent Component **********')
        return (
            <div>
                <h4>Parent Component</h4>
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp