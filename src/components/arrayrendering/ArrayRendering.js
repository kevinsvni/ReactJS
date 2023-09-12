import React from 'react'

function ArrayRendering() {
    const names = ['Kevin', 'Bhumi', 'Savani']
    const namesList = names.map((name, index) => <h3 key={index}>{name}</h3>)
  return (
    <div>
        <h1>ArrayRendering</h1>
        {namesList}
    </div>
        
  )
}

export default ArrayRendering