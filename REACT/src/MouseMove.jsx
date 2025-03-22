import React, { useEffect, useState } from 'react'

const MouseMove = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMovement = (e) => {
        //console.log(e)
        setX(e.screenX)
        setY(e.screenY)
    }
    useEffect(() => {
        document.addEventListener('mousemove', handleMovement)
    })

    return (
        <div>
            <p>X coordinate: {x}</p>
            <p>Y coordinate: {y}</p>
        </div>
    )
}

export default MouseMove
