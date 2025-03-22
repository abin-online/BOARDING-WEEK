import React, { useContext } from 'react'
import OuterContext from './OuterContext'

const Inner = () => {
    const user = useContext(OuterContext)
    return (
        <div className='border-2 '>
            <p>This is the inner component</p>
            <p>{user.name}</p>
        </div>
    )
}

export default Inner
