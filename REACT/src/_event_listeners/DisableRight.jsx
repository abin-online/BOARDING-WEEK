import React, { useEffect } from 'react'

const DisableRight = () => {

    // useEffect(() => {
    //     const disableRightClick = (e) => {
    //         e.preventDefault()
    //     }

    //     document.addEventListener('contextmenu', disableRightClick);

    //     return () => {
    //         document.removeEventListener('contextmenu', disableRightClick)
    //     }
    // }, [])

    const disableRight = (e)=> {
        e.preventDefault()
    }
    return (
        <div>
            <p>Right click is disabled !</p>
            <button onContextMenu={disableRight}>Try to click right click !</button>
        </div>
    )
}

export default DisableRight
