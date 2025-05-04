import React, { useContext, useState } from 'react'
import Context from './Contex'

const Component1 = () => {

    // const [data1, setData1] = useState()
    const data = useContext(Context)
  return (
    <div>
        <h1>COMPONENT 1 : {data}</h1>
    </div>
  )
}

export default Component1
