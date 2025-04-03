import React, { useContext } from 'react'
import Context from './Context'
import { Link } from 'react-router-dom'

const CheckBox = () => {

    const data = useContext(Context)

  return (
    <div>
      <input type='checkbox' checked={data} />
      <br/>
      <Link to='todo'>TODO</Link>
    </div>
  )
}

export default CheckBox
