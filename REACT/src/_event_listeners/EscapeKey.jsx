import React, { useEffect } from 'react'

const EscapeKey = () => {
    useEffect(()=> {
        const clicked = (e)=> {
            console.log(e)
            if(e.key == 'Escape'){
            alert('Are u sure want to exist')
            }
        }

        document.addEventListener('keydown', clicked);

        return ()=> {
            document.removeEventListener('keydown', clicked)
        }
    }, [])
  return (
    <div>
      <p>Alert will show when esc click</p>
    </div>
  )
}

export default EscapeKey
