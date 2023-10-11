import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {
    const [fname, bindFname, resetFname] = useInput('')
    const [lname, bindLname, resetLname] = useInput('')
    const submitHandler = () => {
        alert(`Hello ${fname} ${lname} !`)
        resetFname()
        resetLname()
    }
    return (
        <div>
            <h3>User Form</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First name: </label>
                    <input {... bindFname} type="text" />
                </div>
                <div>
                    <label>Last name: </label>
                    <input {... bindLname} type="text" />
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default UserForm