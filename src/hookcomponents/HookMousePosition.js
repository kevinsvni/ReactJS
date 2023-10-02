import React, {useState, useEffect} from 'react'

function HookMousePosition() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const updatePosition = e => {
        console.log("MouseEvent")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove', updatePosition)
    }, [])
  return (
    <div>X - {x} , Y - {y}</div>
  )
}

export default HookMousePosition