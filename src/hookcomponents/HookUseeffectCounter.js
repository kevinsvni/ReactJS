import React, { useState, useEffect } from 'react'

function HookUseeffectCounter() {
    const [count, incCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })
  return (
    <div>
        <button onClick={() => incCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookUseeffectCounter