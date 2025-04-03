import React, { useContext } from 'react'
import ComponentContext from './Context'

const Component4 = () => {

  const user = useContext(ComponentContext)
  return (
    <div>
      <h1>Component4</h1>
      <h2>Name: {user.name}</h2>
    </div>
  )
}

export default Component4
