import React from 'react'

function ChildListRender({person, index}) {
  return (
        <h3>{index} {person.name} - Age: {person.age} - {person.skill} </h3> 
  )
}

export default ChildListRender