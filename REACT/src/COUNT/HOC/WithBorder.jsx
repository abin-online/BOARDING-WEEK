import React from 'react'

const WithBorder = (WrappedComponent) => {

    return function WithBorder(props) {
        return (
            <div style={{ border: '1px solid black' }}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default WithBorder
