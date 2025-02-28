import React, { useState } from 'react'

const TextForm = ({setName}) => {

    const [input, setInput] = useState('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        setName(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' className='border-2 rounded-2xl  shadow-2xl' value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button className='border-2  shadow-2xl rounded-2xl '>SUBMIT</button>
            </form>
                
        </div>
    )
}

export default TextForm
