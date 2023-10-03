import React, {useContext} from 'react'
import ComponentD from './ComponentD'
import { ContextOne, ContextTwo } from './ParentContext'


function ComponentC() {
    const con1 = useContext(ContextOne)
    const con2 = useContext(ContextTwo)
  return (
    <div>
        <h3>Hello {con1} & {con2} , from Component C</h3>
        <ComponentD />
    </div>
  )
}

export default ComponentC