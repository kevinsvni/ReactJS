import React, { Component } from 'react'
import axios from 'axios'

class HttpGetRequest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                {errorMsg ?
                    <div>{errorMsg}</div> :
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                        </tr>
                        {
                            posts.length ?
                                // posts.map(post => <div key={post.id}>{post.title}</div>) :
                                posts.map(post => <tr>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                </tr>) :

                                null
                        }
                    </table>
                }
            </div>
        )
    }
}

export default HttpGetRequest