import React, { useState } from 'react'

const Head = () => {
    const [input, setInput] = useState('HEAD')
    const [element, setElement] = useState([[]])

    const handleSubmit = () => {
        console.log(input)

        setElement((prev) => {

            if(prev[prev.length - 1][0] == input.trim()) {
                const newArray = [...prev];
                const lastArray = [...prev[prev.length - 1]];
                // [...lastArray, [input]]
                // prev[prev.length - 1].push(input);
                lastArray.push(input);
                newArray[newArray.length - 1] = lastArray
                return newArray
            }else{
                return [...prev, [input]]
            }
        })
    }
    
    return (
        <div>
            {/* <input type='text' value={input} onChange={(e) => setInput(e.target.value)} /> */}
            <select onChange={(e)=> setInput(e.target.value)}>
                <option value='HEAD'>HEAD</option>
                <option value='TAIL'>TAIL</option>
            </select>
            <button onClick={handleSubmit}>SUBMIT</button>

            <div >
                <div className='flex'>
                    {/* <h5>HEAD</h5> */}
                    {element.map((item) => {
                        return <h6 className='px-3'>{item.map(nested=> {
                            return (<p>{nested} <br/></p>)
                        })} </h6>
                    })}
                </div>
                <div>
                    
                </div>

            </div>
        </div>
    )
}

export default Head
