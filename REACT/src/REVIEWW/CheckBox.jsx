import React, { useContext } from 'react'
import Context from './Context'

const CheckBox = () => {

    const data = useContext(Context)

  return (
    <div>
      <input type='checkbox' checked={data} />
    </div>
  )
}

export default CheckBox
