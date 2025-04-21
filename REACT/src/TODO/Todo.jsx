import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const [item, setItem] = useState('');


    const addItem = (e) => {
        e.preventDefault()
        setTodo(prev =>
            [...prev,
                item
            ]
        )
        setItem('')
    }
    return (
        <div>
            <h5>TODO APP</h5>
            <input type='text' value={item} onChange={(e) => setItem(e.target.value)} /> <button onClick={addItem}>ADD ITEM</button>
            {todo.map(item => {
                return <li>{item}</li>
            })}
        </div>
    )
}

export default Todo
