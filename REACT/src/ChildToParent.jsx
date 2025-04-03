import React, { useContext } from 'react'
import { InputContext } from './App'

const ChildToParent = () => {

  const {count, handleChange} = useContext(InputContext)
    
  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleChange}>click</button>
    </div>
  )
}

export default ChildToParent
