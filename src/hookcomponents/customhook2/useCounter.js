import {useState} from 'react'

function useCounter(inititalValue=0, value) {
    const [count, setCount] = useState(inititalValue)
    const increment = () => {
        setCount(prevState => prevState + value)
    }
    const decrement = () => {
        setCount(prevState => prevState - value)
    }
    const reset = () => {
        setCount(inititalValue)
    }
    return [count, increment, decrement, reset]
}

export default useCounter