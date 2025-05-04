import React, { useState } from 'react'

const Form = () => {
    const initialState = {
        name: '',
        age: 0,
        gender: ''
    }
    const [form, setForm] = useState(() => {
        const state = localStorage.getItem('form');
        if (state) {
            return JSON.parse(state)
        } else {
            initialState
        }
    })

    const handleChange = (e) => {
        //console.log(e.target.name)
        setForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        localStorage.setItem('form', JSON.stringify(form));
    }

    return (
        <>
            <form>
                <label>Name</label> : <input value={form.name} onChange={handleChange} name='name' type='text' />
                <label>Age</label> : <input value={form.age} onChange={handleChange} name='age' type='number' />
                <label>Gender</label> : <select value={form.gender} onChange={handleChange} name='gender'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='others'>Others</option>
                </select>
            </form>
        </>
    )
}

export default Form
