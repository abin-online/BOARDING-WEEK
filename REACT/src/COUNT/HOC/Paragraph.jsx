import React from 'react'
import WithBorder from './WithBorder'

const Paragraph = () => {
    return (
        <div>
            <p>Name: Abin Babu</p>
        </div>
    )
}

export default WithBorder(Paragraph)
