import React, { useEffect, useState } from 'react'

const LoggedOut = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        const helperFunction = () => {
            setTime(0)
            clearInterval(timer)
        }

        //setTime((count) => count + 1);

        const timer = setInterval(() => {
            setTime((prev) => prev + 1)
        }, 1000)

        document.addEventListener('mousemove', helperFunction);
        document.addEventListener('keydown', helperFunction);

        return () => {
            document.removeEventListener('mousemove', helperFunction);
            document.removeEventListener('keydown', helperFunction)
            clearInterval(timer)
        }
    }, [])


    return (
        <div>
            <p>{time < 5 ? time : ''}</p>
            <p>{time < 5 ? 'LOGGED' : 'LOGGED OUT'}</p>
        </div>
    )
}

export default LoggedOut
