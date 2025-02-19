import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = ()=> {
        setCounter((prev)=> setCounter(prev + 1))
    }
    const decrement = ()=> {
        setCounter((prev)=> setCounter(prev - 1))
    }
    const reset = ()=> {
        setCounter(0)
    }
  return (
<>
  <div className="flex py-20 flex-col items-center justify-center">
    <div className="text-3xl font-bold text-gray-800">{counter}</div>
    <div className="flex gap-3">
      <button
        onClick={increment}
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
      >
        INCREMENT
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
      >
        RESET
      </button>
      <button
        onClick={decrement}
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
      >
        DECREMENT
      </button>
    </div>
  </div>
</>

  )
}

export default Counter
