import React, { useCallback } from 'react'

const UseCallBack = () => {

    const hello = useCallback(()=> {
        console.log('Hwllo')
    },[]) 

    
    return (
        <div>
            <button onClick={hello}></button>
        </div>
    )
}

export default UseCallBack
