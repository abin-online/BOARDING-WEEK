import React, { useContext } from 'react'
import Context from './Contex'

const Component2 = () => {

    const data = useContext(Context)
  return (
    <div>
      <h2>COMPONENT 2 : {data}</h2>
    </div>
  )
}

export default Component2
