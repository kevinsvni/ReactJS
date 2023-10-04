import React, {useState} from 'react'
import HookMousePosition from './HookMousePosition';

function HookMouseContainer() {
    const [visibility, setVisibility] = useState(true)
  return (
    <div>
        <button onClick={() => setVisibility(!visibility)}>Toggle Co-ordinates</button>
        {visibility && <HookMousePosition/>}
    </div>
  )
}

export default HookMouseContainer