import React, { useState, useRef } from 'react'

const StopWatch = () => {

    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const timeReference = useRef(null)

    const startTimer = ()=> {
        if(!timeReference.current) {
            timeReference.current = setInterval(()=> {
                setTime((prev)=> prev + 1)
            },1000)
        }
    }

    const pause = ()=> {
        clearInterval(timeReference.current)
        timeReference.current = null
    }

    const stop = ()=> {
        clearInterval(timeReference.current)
        timeReference.current = null
        setTime(0)
        startTimer()
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
          {/* Timer Display */}
          <h1 className="text-6xl font-mono bg-gray-800 px-10 py-5 rounded-lg shadow-md">
            {String(Math.floor(time / 60)).padStart(2, "0")}:
            {String(time % 60).padStart(2, "0")}
          </h1>
    
          {/* Button Controls */}
          <div className="mt-8 flex gap-6">
            <button
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              onClick={startTimer}
            >
              START
            </button>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              onClick={pause}
            >
              PAUSE
            </button>
            <button
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              onClick={stop}
            >
              RESET
            </button>
          </div>
        </div>
      );
}

export default StopWatch
