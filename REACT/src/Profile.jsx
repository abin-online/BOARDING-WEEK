import React, { useContext } from 'react'
import UserContext from './Context'

const  Profile = () => {

    const user = useContext(UserContext);


  return (
    <div>
      <h1>{user.name}</h1>
      <p>age: {user.age}</p>
    </div>
  )
}

export default Profile
