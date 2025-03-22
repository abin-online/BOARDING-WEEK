import React, { useEffect } from 'react'

const CloseTab = () => {

    useEffect(() => {

        const showAlert = (e) => {
            console.log(e)
            alert('are u sure')
            e.preventDefault()
        }

        window.addEventListener('beforeunload', showAlert);

        return () => {
            window.removeEventListener('beforeunload', showAlert)
        }
    }, [])

    return (
        <div>

        </div>
    )
}

export default CloseTab
