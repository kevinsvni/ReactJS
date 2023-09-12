import React, {Component} from "react"
import ChildComponent from './ChildComponent';

class ParentComponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Kevin Savani'
      }

      this.alertName = this.alertName.bind(this)
    }

    alertName(paraName){
        if(typeof paraName === "string"){
            alert(`Hello ${paraName}`)
        }else{
            alert(`Hello ${this.state.name}`)
        }
    }


    render() {
        return(
            <div>
                <ChildComponent alertName={this.alertName}/>
            </div>
        )
    }
}

export default ParentComponent