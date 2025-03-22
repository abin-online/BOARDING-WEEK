import React, { useState } from 'react'

const Button = () => {
    const [click, setClick] = useState(false)
    const handleClick = (e)=> {
        e.persist()
            console.log(e);
            setClick((prev)=> !prev)
    }
  return (
    <div>
      <button onClick={handleClick}>{!click ? `click Me !` : 'clicked'}</button>
    </div>
  )
}

export default Button
