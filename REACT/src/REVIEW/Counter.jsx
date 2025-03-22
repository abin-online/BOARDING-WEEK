import React, { useReducer } from 'react'


const reducer = (state, action) => {

    switch (action.type) {
        case 'INCREMENT': return {
            count: state.count + 1
        }
        case 'DECREMENT': return {
            count: state.count - 1
        }
        case 'RESET': return {
            count: 0
        }
    }
}
const Counter = () => {

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
    )
}

export default Counter



