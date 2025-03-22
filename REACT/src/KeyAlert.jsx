import React, { useEffect, useState } from 'react'

const KeyAlert = () => {

    const [key, setKey] = useState('');

    const handleClick = (e)=> {
        e.preventDefault();
        setKey(e.key);
    }

    useEffect(()=> {
        document.addEventListener('keydown', handleClick)
    })

    return (
        <div>

            {key ?  <p> You have clicked the '{key}' key</p> : <p>Click any key</p>}
        </div>
    )
}

export default KeyAlert
