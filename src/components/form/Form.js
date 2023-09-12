import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            language: 'angular',
            comment: ''
        }
    }

    handleEmailOnchange = event =>{
        this.setState({
            email: event.target.value
        })
    }
    
    handleLangOnchange = event => {
        this.setState({
            language: event.target.value
        })
    }

    handleCommentOnchange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit = event => {
        const {email, language, comment} = this.state
        alert(`${email} ${language} ${comment}`)
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        const {email, language, comment} = this.state
        return(
            <div className='container'>
                <h1>Hello</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={this.handleEmailOnchange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Language</label>
                        <select className="form-control" id="exampleFormControlSelect1" value={language} onChange={this.handleLangOnchange}>
                        <option value='angular'>Angular</option>
                        <option value='react'>React</option>
                        <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={comment} onChange={this.handleCommentOnchange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
            
        )
    }
}

export default Form