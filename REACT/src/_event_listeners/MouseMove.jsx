import React, { useEffect, useState } from 'react'

const MouseMove = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouseMove = (e) => {
        console.log(e)
        setX(e.screenX)
        setY(e.screenY)
    }
    useEffect(() => {

        document.addEventListener('mousemove', mouseMove)

        return () => {
            document.removeEventListener('mousemove', mouseMove)
        }
    }, [])
    return (
        <div>
            <p>x coordinate : {x}</p>
            <p>y coordinate : {y}</p>
        </div>
    )
}

export default MouseMove
