import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetchingP2() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setPost(response.data)
            })
            .catch(error => {
                console.log(error)
                // this.setState({ errorMsg: 'Error retreiving data' })
            })
    }, [id])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                {/* {
                    posts.length ?
                        posts.map(post => <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                        </tr>) :
                        null
                } */}
                <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                </tr>
            </table>
        </div>
    )
}

export default DataFetchingP2