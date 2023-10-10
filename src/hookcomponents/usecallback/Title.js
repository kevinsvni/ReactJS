import React from 'react'

function Title() {
    console.log(`Rendering Title`)
    return (
        <h3>UseCallbackHook - Title</h3>
    )
}

export default React.memo(Title)