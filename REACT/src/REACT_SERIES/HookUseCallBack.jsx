import React, { useCallback, useState } from 'react'
import List from './List';

const HookUseCallBack = () => {

    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0)

    const styleTheme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    return (
        <div>
            <div style={styleTheme}>
                <h1>{number}
                </h1>
            </div>
            <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prev => !prev)}>TOGGLE</button>
            <List getItems={getItems} />
        </div>
    )
}

export default HookUseCallBack
