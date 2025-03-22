import React, { useState } from 'react'

const Button = () => {

    const [toggle, setToggle] = useState();


  return (
    <div>
      <button onClick={()=> setToggle(prev => !prev)}>TOGGLE</button>
    </div>
  )
}

export default Button
