import React, { useState } from 'react'

function HookUsestateObject() {
    const [name, setName] = useState({fname:'', lname:''})
  return (
    <div>
        <input type='text' value={name.fname} onChange={e => setName({...name, fname: e.target.value})}/>
        <input type='text' value={name.lname} onChange={e => setName({...name, lname: e.target.value})}/>
        <div>{name.fname} | {name.lname}</div>
    </div>
  )
}

export default HookUsestateObject