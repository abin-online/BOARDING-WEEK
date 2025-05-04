import React, { useEffect, useState } from 'react'

const AutoComplete = () => {

    // const fetchData = async()=> {
    //     await fetch(``)
    // }

    // useEffect(() => {

    // }, [])

    const [input, setInput] = useState('')

    const [todo, setTodo] = useState([]);

    const handleSubmit = () => {
        if(!input) return
        setTodo((prev) => {
            return [
                ...prev,
                input
            ]
        })
        setInput('')
    }

    return (
<div className='auto-container'>
  <h3 className='heading'>AUTO COMPLETE</h3>

  <div className='search-wrapper'>
    <input
      className='search-box'
      value={input}
      type='text'
      onChange={(e) => setInput(e.target.value)}
    />
    <button className='submit' onClick={handleSubmit}>
      ADD
    </button>
  </div>

  {todo.map((item, index) => (
    <div key={index} className='item'>
      {item}
      <button className='edit-btn'>EDIT</button>
    </div>
  ))}
</div>

    )
}

export default AutoComplete
