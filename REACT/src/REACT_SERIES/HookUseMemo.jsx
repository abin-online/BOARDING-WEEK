import React, { useEffect, useMemo, useState } from 'react'

const HookUseMemo = () => {

    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);

    const styleTheme = useMemo(()=> {
        return {
            backgroundColor : dark ? 'black' : 'white',
            color: dark ?  'white' : 'black'
        }
    },[dark])

    const slowFunction = (num)=> {
        for(let i = 0 ; i < 100000000; i++){}
        return num * 2
    }

    const double = useMemo(()=> {
        return slowFunction(number)
    }, [number]) 


    useEffect(()=> {
        console.log('theme chnaged')
    }, [styleTheme])

  return (
    <div>
        <div style={styleTheme}>
            <h1>{double}</h1>
        </div>
        <input type='number' onChange={(e)=> setNumber(e.target.value)}/>
        <button onClick={()=> setDark(prev => !prev)}>TOGGLE</button>
    </div>
  )
}

export default HookUseMemo
