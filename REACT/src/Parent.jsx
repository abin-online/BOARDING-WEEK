import React, { useState } from 'react'
import ChildToParent from './ChildToParent'

const Parent = () => {

    const [name, setName] = useState('')

  return (
    <div>
        <h1>Hello {name}</h1>
       
        <ChildToParent setName={setName}/>
    </div>
  )
}

export default Parent
