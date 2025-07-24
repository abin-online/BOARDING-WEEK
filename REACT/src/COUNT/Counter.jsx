import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

const Counter = () => {


    const dispatch = useDispatch()

    const count = useSelector((state) => state.count.count);
    useEffect(() => {

        console.log(count);
    }, [])

    return (
        <div className='counter-container'>
            <div className='count'>{count}</div>
            <div className='button-container'>
                <button className='counter-button' onClick={() => dispatch(increment())}>INCREMENT</button>
                <button className='counter-button' onClick={() => dispatch(decrement())}>INCREMENT</button>
                <button className='counter-button' onClick={() => dispatch(reset())}>INCREMENT</button>
            </div>
        </div>
    )
}

export default Counter
