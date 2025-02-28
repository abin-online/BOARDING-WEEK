// import { useState } from 'react'
// import './App.css'
// import Counter from './Counter'
// import Todo from './Todo'
// import Toggle from './Toggle'
// import Input from './Input'
// import Form from './Form'
// import StopWatch from '../StopWatch'
// import Greetings from './Parent'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='text-3xl '>
//         {/* <Toggle /> */}
//         {/* <StopWatch/> */}
//         <Greetings/>

//       </div>
//     </>
//   )
// }

// export default App

import React from 'react'

const Button = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

const App = () => {
  return (
    <Button className='border-2 rounded-2xl' onClick={() => alert('Clicked Me')} >
      click  me
    </Button>
  )
}
export default App
