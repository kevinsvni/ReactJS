import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 5)
  return (
    <div>
        <h5>Count - {count}</h5>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterOne