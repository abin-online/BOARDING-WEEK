import React, { useState } from 'react'

const Head = () => {

    const [value, setValue] = useState('HEAD');
    const [array, setArray] = useState([['HEAD']]);

    const handleClick = () => {
        if (array[array.length - 1][0] !== value) {
            setArray(prev => [...prev, [value]])
            console.log(array)

        } else {
            // console.log(array)
            // setArray(newArray)
            setArray((prev) => {
                const newArray = [...prev];
                // const lastArray = [...newArray[newArray.length-1]];
                // lastArray.push(value);
                newArray[newArray.length - 1].push(value)
                console.log(newArray)
                return newArray
            })
            // return newArray
        }
    }

    return (
        <div>
            <h3 className='head'>HEAD TAIL</h3>
            <div className='drop-down-container'>
                <select className='drop-down' onChange={(E) => setValue(E.target.value)} >
                    <option value='HEAD'>HEAD</option>
                    <option value='TAIL'>TAIL</option>
                </select>
                <button className='add-btn' onClick={handleClick}>ADD</button>
            </div>
            {/* <h1>{value}</h1> */}
            <div className='container'>
                {array.map((item, index) => {
                    return (
                        <div key={index} className='item'>
                            {item.map((sub, index) => {
                                return (
                                    <div key={index} className='sub'>
                                        {sub}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Head
