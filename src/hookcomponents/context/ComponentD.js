import React from 'react'
import { UserConsumer } from './userContext'

function ComponentD() {
    return (
        <div>
            <UserConsumer>
                {
                    (username) => {
                        return <h3>Hello {username}, from Component D </h3>
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default ComponentD