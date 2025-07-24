import React, { useState } from 'react';

const Todo = () => {
  const [item, setItem] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = (e) => {
    if (e.key === 'Enter' && item.trim()) {
      setTodo((prev) => [...prev, item]);
      setItem('');
    }
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '2rem',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '1rem',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          onKeyDown={addTodo}
          placeholder="Type and hit Enter"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '6px',
            fontSize: '1rem',
            marginBottom: '1rem',
            boxSizing: 'border-box',
          }}
        />
        <div>
          {todo.map((todoItem, index) => (
            <div
              key={index}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#e6e6e6',
                borderRadius: '6px',
                marginBottom: '0.5rem',
                color: '#333',
              }}
            >
              {todoItem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
