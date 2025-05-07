import React, { useState } from 'react'

const ProgressBar = () => {

    const [value, setValue] = useState(0);
    const [color, setColor] = useState()
    const handleChange = (value) => {
        const newValue = Math.min(100, Math.max(0, value));
        if (newValue < 30) {
            setColor('red');
            setValue(newValue)
        } else if (value < 50) {
            setColor('orange')
            setValue(newValue)
        } else if (value < 80) {
            setColor('yellow')
            setValue(newValue)
        }  else if (value < 90) {
            setColor('rgb(50, 200, 20)')
            setValue(newValue)
        }else {
            setColor('rgb(57, 219, 24)')
            setValue(newValue)
        }
    }
    return (
        <div className='progress-container'>
            <div className='bar'>PROGRESS BAR</div>
            <div className="progress-bar">
            <div className='progress-fill' style={{ color: `${color === 'yellow' ? 'black' : 'white'}`, background: `${color}`, width: `${value}%` }}>{value}%</div>
            </div>
            <div className="input-label">
                <p className='type'>Type your percentage</p>
            <input className='input' type='number' min={0} max={100} value={value} onChange={(e) => handleChange(e.target.value)} />
            </div>
        </div>
    )
}

export default ProgressBar
