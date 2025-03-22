import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {

    const [list, setList] = useState([])


    useEffect(() => {
        setList(getItems())
        console.log('setting items')
    }, [getItems])

    
    return (
        <div>
            {list.map((x) => {
                return <li>{x}</li>
            })}
        </div>
    )
}

export default List
