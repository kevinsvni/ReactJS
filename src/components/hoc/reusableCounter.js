import React from 'react'

const reusableCounter = (WrappedComponent, incremenNumber) => {
    class ReusableCounter extends React.Component {
        constructor(props) {
            super(props) 
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incremenNumber }
            })
        }

        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {... this.props}/>
        }
    }
    return ReusableCounter
}

export default reusableCounter