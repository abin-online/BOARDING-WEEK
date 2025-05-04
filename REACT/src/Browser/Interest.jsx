import React from 'react'

const Interest = () => {
    return (
        <div>
            <h6>AREAS OF INTEREST</h6>
            {['cooking', 'cricket', 'chess', 'coding'].map((item) => {
                return <p>{item}</p>
            })}
        </div>
    )
}

export default Interest
