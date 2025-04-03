import React, { useState } from 'react'

const UseInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e)=> {
    setValue(()=> e.target.value);
  }
  

  return {
    value,
    onChange : handleChange
  }
}

export default UseInput
