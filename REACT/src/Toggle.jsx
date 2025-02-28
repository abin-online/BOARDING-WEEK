import React, { useState } from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>

      <button onClick={() => setToggle((prev) => !prev)}>toggle</button>
      <h1>      {toggle && 'HELLO WORLD'}
      </h1>
    </>
  )
}

export default Toggle
