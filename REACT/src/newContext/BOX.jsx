import React, { useContext } from 'react'
import CONTEXT from './Context'

const BOX = () => {

    const boolean = useContext(CONTEXT)
    
  return (
    <div>
      <input type='checkbox'checked={boolean}/>
    </div>
  )
}

export default BOX
