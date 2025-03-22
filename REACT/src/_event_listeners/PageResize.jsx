import React, { useEffect, useState } from 'react'

const PageResize = () => {

    const [count , setCount] = useState(0)

    

    useEffect(()=> {
        const handleResize = ()=> {
            setCount((prev)=> prev + 1)
        }

        window.addEventListener('resize', handleResize)

        return ()=> {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
  return (
    <div>
        <h1 className='text-9xl '>{count}</h1>
      <p>count changes according to page reszie</p>
    </div>
  )
}

export default PageResize
