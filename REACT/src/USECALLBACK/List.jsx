import React, { useEffect } from 'react'

const List = ({getNumber}) => {
    useEffect(()=> {
        console.log('Re created !')
    }, [getNumber])
  return (
    <div>
        {getNumber().map((item)=> {
            return <p>{item}</p>
        })}
    </div>
  )
}

export default List
