import React, { useContext } from 'react'
import UserData from './Context'

const Component1 = () => {

    const user = useContext(UserData)
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default Component1
