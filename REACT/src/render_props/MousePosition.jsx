import React, { useState } from 'react'

const MouseTracker = ({ render }) => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    return (
        <div onMouseMove={handleMouse}>
            {render(mousePosition)}
        </div>
    )
}

export default MouseTracker
