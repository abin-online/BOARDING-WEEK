// // import { useState } from 'react'
// // import './App.css'
// // import Counter from './Counter'
// // import Todo from './Todo'
// // import Toggle from './Toggle'
// // import Input from './Input'
// // import Form from './Form'
// // import StopWatch from '../StopWatch'
// // import Greetings from './Parent'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div className='text-3xl '>
// //         {/* <Toggle /> */}
// //         {/* <StopWatch/> */}
// //         <Greetings/>

// //       </div>
// //     </>
// //   )
// // }

// // export default App

// import React from 'react'


// const Button = (props) => {
//   return (
//     <button {...props}>
//       {props.children}
//     </button>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Button className = 'border-2 rounded-2xl ' onClick={()=> alert('POda')}>
//       CLICK ME
//       </Button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const Timer = () => {

//     const [timer, setTimer] = useState(0);

//     useEffect(() => {
//         console.log('componenet mounts');

//         const timerInterval = setInterval(() => {
//             setTimer((prev) => prev + 1)
//         }, 1000)

//         return () => {
//             clearInterval(timerInterval)
//             console.log('Component unmounts');
//         }
//     }, [])
//     return (
//         <div>
//             {timer}
//         </div>
//     )
// }



// const App = () => {

//     const [show, setShow] = useState(false)
//     return (
//         <div>
//             {!show && <Timer />}

//             <button onClick={() => setShow(prev => true)}> UNMOUNT </button>
//         </div>
//     )
// }

// export default App


// import React from 'react'

// const Greetings = ({name}) => {
//   return (
//     <div>
//       {name}
//     </div>
//   )
// }



// const App = () => {
//   return (
//     <div>
//       <Greetings name='Abin'/>
//     </div>
//   )
// }

// export default App




// import React, { useState } from "react";

// const Counter = React.memo(({ count }) => {
//   console.log("Counter re-rendered");
//   return <h2>Count: {count}</h2>;
// });

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [otherState, setOtherState] = useState(false);

//   const increase = ()=> {
//     console.log("Counter re-rendered");
//     setCount((prev)=> prev  + 1)
//   }
//   return (
//     <div>
//       {/* <Counter count={count} /> */}
//       {count}
//       <button onClick={increase}>Increment</button>
//       <button onClick={() => setOtherState(!otherState)}>Toggle</button>
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react'

// const UseCustomHook = (initialValue) => {

//     const [value, setValue] = useState(initialValue)

//     const setFunction = ()=> {
//         setValue(!value)
//     }
//   return [value, setFunction]
// }



// const App = () => {

//     const [booleanValue , setBooleanValue] = UseCustomHook(false);

//   return (
//     <div>
//         {!booleanValue ?   (<h1>Hi Abin</h1>) : (<h1>Toggled</h1>)}

//         <button onClick={()=>setBooleanValue(prev=>!prev)}>TOGGLE</button>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'


// const Child = ({ setText }) => {

//     return (
//         <div>
//             <input type='text' onChange={(e) => setText(e.target.value)} />
//         </div>
//     )
// }


// const App = () => {

//     const [name, setName] = useState('ABIN')

//     const [show, setShow] = useState(false)

//     useEffect(() => {
//         console.log('mounteddd')

//         return()=> {
//             console.log('Unmounted')
//         }
//     }, [])

//     return (
//         <>

//         {
//             !show && name
//         }

//         <button onClick={()=>setShow((prev)=> true)}>
//         HIDE
//         </button>
//         </>
//     )
// }

// export default App


// import React from 'react'
// import ComponentContext from './ContextComponents/Context'
// import Component1 from './ContextComponents/Component1'

// const App = () => {

//     const user = {
//         name: 'Abin',
//         age: 23
//     }
//     return (
//         <div>
//             <ComponentContext.Provider value={user}>
//                 <Component1/>
//             </ComponentContext.Provider>
//         </div>
//     )
// }

// export default App



//REACT.MEMO

// import React, { useState } from 'react';

// // Memoized Component
// const ChildComponent = React.memo(({ name, count }) => {
//     console.log(`Rendering Child - Name: ${name}, Count: ${count}`);
//     return (
//         <div>
//             <h2>Child Component - {name}</h2>
//             <p>Count in Child: {count}</p>
//         </div>
//     );
// });

// const App = () => {
//     const [count, setCount] = useState(0);    // Non-changing prop for testing
//     const [name, setName] = useState('Abin'); // Changing prop for testing

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>

//             <h1>Current Name: {name}</h1>
//             <button onClick={() => setName(name === 'Abin' ? 'Anu' : 'Abin')}>
//                 Change Name
//             </button>

//             <ChildComponent name={name} count={count} />
//         </div>
//     );
// };

// export default App;



// import React, { useState } from 'react'

// const Child = React.memo(({name}) => {
//     console.log(`Re rendered !`)
//   return (
//     <div>
//       <p>child component : {name}</p>
//     </div>
//   )
// })


// const App = () => {

//     const [count, setCount] = useState(0)
//   return (
//     <div>
//         <h1>Count : {count}</h1>
//       <button onClick={()=> setCount(prev=> prev  + 1)}>INCREMENT</button>
//       <Child name={'abin'}/>
//     </div>
//   )
// }

// export default App


// import React, { useState, useMemo } from 'react';

// const PrimeCalculator = () => {
//     const [number, setNumber] = useState(0);
//     const [counter, setCounter] = useState(0); // Unrelated state

//     // Expensive calculation - Prime number checking
//     const isPrime = (num) => {
//         console.log('Calculating prime...');
//         if (num < 2) return false;
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) return false;
//         }
//         return true;
//     };

//     // Memoizing the prime calculation
//     const primeStatus = useMemo(() => isPrime(number), [number]);

//     return (
//         <div>
//             <h1>Prime Number Checker</h1>
//             <input
//                 type="number"
//                 value={number}
//                 onChange={(e) => setNumber(parseInt(e.target.value))}
//                 placeholder="Enter a number"
//             />
//             <p>{number} is {primeStatus ? 'a Prime' : 'not a Prime'} number.</p>

//             <button onClick={() => setCounter(counter + 1)}>
//                 Increment Counter: {counter}
//             </button>
//         </div>
//     );
// };

// export default PrimeCalculator;


// import React, { useState, useMemo } from 'react';

// // Slow factorial function (simulating heavy computation)
// const slowFunction = (num) => {
//     console.log('Running slow function...');
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// };

// const App = () => {
//     const [number, setNumber] = useState(5);    // Number for calculation
//     const [theme, setTheme] = useState('light'); // Unrelated state for testing

//     // Memoizing the result of slowFunction
//     const factorial = useMemo(() => slowFunction(number), [number]);

//     return (
//         <div>
//             <h1>Factorial of {number} is {slowFunction(number)}</h1>
//             <button onClick={() => setNumber(number + 1)}>Increment Number</button>

//             <h2 className=' `${}`  bg-black  '>Current Theme: {theme}</h2>
//             <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>

//                 Toggle Theme
//             </button>
//         </div>
//     );
// };

// export default App;


// import React, { useState, memo, useCallback } from 'react';

// // Memoized Child Component
// const ChildComponent = memo(({ onClick }) => {
//     console.log('ChildComponent rendered!');
//     return (
//         <div>
//             <button onClick={onClick}>Click Me!</button>
//         </div>
//     );
// });

// const App = () => {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState('Abin');

//     // Memoizing the function so it's NOT recreated on every render
//     const handleClick = useCallback(() => {
//         console.log('Button clicked!');
//     }, []); // Empty dependency array → function reference never changes

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>

//             <h1>Current Name: {name}</h1>
//             <button onClick={() => setName(name === 'Abin' ? 'Anu' : 'Abin')}>
//                 Change Name
//             </button>

//             <ChildComponent onClick={handleClick} />
//         </div>
//     );
// };

// export default App;


// import React, { useState, useCallback } from 'react';

// // Child Component
// const Button = ({ handleClick }) => {
//     console.log('Button component rendered!');
//     return <button onClick={handleClick}>Click Me!</button>;
// };

// const App = () => {
//     const [count, setCount] = useState(0);

//     // Without `useCallback`, this function is recreated on every render
//     const handleClick = useCallback(() => {
//         console.log('Button clicked!');
//     }, []); // Empty dependency array → Function reference never changes

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>

//             <Button handleClick={handleClick} />
//         </div>
//     );
// };

// export default App;

// import React, { useState, useCallback, useEffect } from 'react';

// // Helper function to track function reference
// const trackFunction = (func) => {
//     console.log(`🔍 Function created:`, func);
//     return func;
// };

// // Child Component
// const Child = ({ handleClick }) => {
//     console.log('🎯 Child rendered!');
//     return <button onClick={handleClick}>Click Me!</button>;
// };

// const App = () => {
//     const [count, setCount] = useState(0);

//     // Tracking without useCallback (will create a NEW function on each render)
//     // const handleClick = trackFunction(() => console.log('✅ Button clicked!'));

//     // Tracking WITH useCallback (reuses the same function reference)
//     const handleClick = useCallback(
//         trackFunction(() => console.log('✅ Button clicked!')),
//         []
//     );

//     // 🔥 Using `useEffect` to compare references
//     useEffect(() => {
//         console.log(`🔄 Is function reference the same?`, 
//             Object.is(handleClick, handleClick) // Always true with useCallback ✅
//         );
//     }, [handleClick]);

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>

//             <Child handleClick={handleClick} />
//         </div>
//     );
// };

// export default App;


// import React, { useCallback, useState } from 'react'

// const App = () => {

//     const [count, setCount] = useState(0)

//     const handleClick = useCallback(() => {
//         console.log('Clicked');
//     }, [])


//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={() => setCount(prev => prev + 1)}>INCREMENT</button>
//             <button onClick={handleClick}>Click Me !</button>
//         </div>
//     )
// }

// export default App

// import React, { Suspense } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Todo from './Todo';
// import Home from './Home';
// const Todo = React.lazy(() => import('./Todo'));
// const Counter = React.lazy(() => import('./CounterRedux'));
// const App = () => {
//     return (
//         <Router>
//             <Suspense fallback={<h2>LOADING</h2>}>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/todo" element={<Todo />} />
//                     <Route path='counter' element={<Counter />} />
//                 </Routes>
//             </Suspense>
//         </Router>
//     )
// }

// export default App


// import React from 'react'
// import ComponentContext from './ContextComponents/Context'
// import Component1 from './ContextComponents/Component1'
// const App = () => {

//    const USER = {
//     name: 'poDA'
//    } 
//   return (
//     <ComponentContext.Provider value={USER}>
//         <Component1/>
//     </ComponentContext.Provider>
//   )
// }

// export default App


// import { useCallback, useState } from "react";

// const App = () => {

//     const [count, setCount] = useState(0)

//     const handleClick = useCallback(() => {
//         console.log('Clicked');
//     }, [])

//     return (
//         <div>
//             <p>{count}</p>
//             <button onClick={() => setCount(prev => prev + 1)}>INCREMENT</button>
//             <button onClick={handleClick}>Click Me !</button>
//         </div>
//     )
// }

// export default App


// import React, { lazy, Suspense } from 'react'
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './Home'
// const TODO = lazy(()=> import('./Todo'))
// const App = () => {
//   return (
//     <>
//       <Router>
//         <Suspense fallback={<h1>LOADING....</h1>}>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='todo' element={<TODO/>}/>
//         </Routes>
//         </Suspense>
//       </Router>

//     </>
//   )
// }

// export default App



// import React, { Suspense } from 'react'
// import Button from './Button'
// import DisableRight from './_event_listeners/DisableRight'
// import PageResize from './_event_listeners/pageResize'
// import EscapeKey from './_event_listeners/EscapeKey'
// //import MouseMove from './_event_listeners/MouseMove'
// import CloseTab from './_event_listeners/CloseTab'
// import LoggedOut from './_event_listeners/LoggedOut'
// import CounterUSR from './CounterUSR'
// import UserContext from './Context'
// import UserData from './ContextComponents/PRACTICE/Context'
// import Component from './ContextComponents/PRACTICE/Component'
// import HookUseMemo from './REACT_SERIES/HookUseMemo'
// import HookUseCallBack from './REACT_SERIES/HookUseCallBack'
// import MouseMove from './MouseMove'
// import KeyAlert from './KeyAlert'
// import UseReducer from './USEREDUCER/UseReducer'
// import OuterContext from './ContextComponents/OuterContext'
// import Outer from './ContextComponents/Outer'
// import Counter from './REVIEW/Counter'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './REVIEW/Home'
// const App = () => {

//   const user = {
//     name: 'Abin'
//   }

//   const Counter = React.lazy(() => import('./REVIEW/Counter'))

//   return (
//     // <UserData.Provider value={user}>
//     //   <Component />
//     //   <HookUseCallBack/>
//     // </UserData.Provider>
//     // <OuterContext.Provider value={user}>
//     //     <Outer/>
//     // </OuterContext.Provider>
//     <>
//       <Router>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/poda' element={
//             <Suspense fallback={<h2>LOading</h2>}>
//               <Counter />
//             </Suspense>
//           } />
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App

// import React, { useState, useCallback } from 'react';

// const Button = React.memo(({handleClick})=> {
//   console.log('rendering')
//   return(
//     <button onClick={handleClick}>Click Me</button>
//   )
// })

// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleClick =useCallback(() => {
//     setCount(prev => prev + 1);
//   },[]); // Empty dependency array means function reference remains the same

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <Button handleClick={handleClick} />
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react'
// import CheckBox from './REVIEWW/CheckBox'
// import Context from './REVIEWW/Context'

// const App = () => {

//   const [toggle, setToggle] = useState(false);
//   return (
//     <div>
//       <Context.Provider value={toggle}>
//         <button onClick={() => setToggle(prev => !prev)}> TOGGLE </button>
//         <CheckBox/>
//       </Context.Provider>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import MouseTracker from './render_props/MousePosition'

// const App = () => {
//   return (
//     <div>
//       <MouseTracker render={(position)=> {
//         return <h1>X: {position.x} Y: {position.y}</h1>
//       }}/>
//     </div>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react'

// const App = () => {

//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false)

//   const slowFunction = (number)=> {
//     const start = new Date();
//         for(let i = 0 ; i < 100000000; i++){

//         }
//         console.log('rendered !', new Date() - start)
//         return number * 2;

//   }

//   const doubleNumber = useMemo(()=> slowFunction(number), [number])

//   const themeStyle = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black',
//     padding: '30px',
//     transition: '0.5s',
//     borderRadius :'2px'
//   };
//   return (
//     <div style={themeStyle}>
//         <p>{doubleNumber}</p>
//         <input type='number' onChange={(e)=> setNumber(e.target.value)} value={number}/>
//         <button onClick={()=> setDark(prev => !prev)}>TOGGLE</button>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)
//   const [flag, setFlag] = useState(true)


//   useEffect(() => {
//     console.log("Setting Interval...");
//     const timer = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 1000);

//     return () => {
//       console.log("Clearing Interval...");
//       clearInterval(timer); // Cleanup function
//       console.log("Timer is cleared");
//     };
//   }, [flag]);

//   return( <div>
//     Count: {flag && count}
//     <button onClick={()=> setFlag(prev => !prev)}>UNMOUNT</button>
//     </div>);
// }

// export default App

// import React, { useCallback, useState } from 'react'
// import List from './USECALLBACK/List';

// const App = () => {

//   const [number, setNumber] = useState(0)
//   const [dark, setDark] = useState(false);

//   const getNumber = useCallback(()=> {
//     return [number + 1, number + 2, number + 3]
//   }, [number])

//   const themeStyle = {
//     backgroundColor : dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }

//   return (
//     <div style={themeStyle}>
//         <input type='number' onChange={(e)=> setNumber(e.target.value)} />
//         <button onClick={()=> setDark((prev)=> !prev)}>THEME</button>
//         <List getNumber={getNumber}/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {



//   const [input, setInput] = useState({
//     name: '',
//     place: ''
//   })
//   const [show, setShow] = useState(false)

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name, value)
//     setInput((prev) => {
//       return {
//         ...prev,
//         [name]: value
//       }
//     })
//   }

//   const handleClick = (e) => {
//     e.preventDefault()

//     setShow((prev) => true)
//   }

//   return (
//     <div>
//       <form onSubmit={handleClick}>

//         Name :  <input type='text' value={input.name} name='name' onChange={handleChange} />
//         <br />
//         Place :   <input type='text' value={input.place} name='place' onChange={handleChange} />
//         <br />
//         <button> submit</button>
//       </form>
//       {show && (<>
//         <h1>Name : {input.name}</h1>
//         <h1>Place : {input.place}</h1>
//       </>)}

//     </div>
//   )
// }

// export default App



//using useRef 

// import React, { useRef, useState } from 'react'

// const App = () => {

//   const nameRef = useRef(null);

//   const [name, setName] = useState('')
//   const [show, setShow] = useState(false)

//   const handleSubmit = (e)=> {
//     e.preventDefault()
//     setShow(true)
//     setName(nameRef.current.value)
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input ref={nameRef}/>
//     <button type='submit'>SUBMIT</button>
//       </form>

//       {
//         show && <>
//         Name : <p>{name}</p>
//         </>

//       }
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import CheckBox from './REVIEWW/CheckBox'
// import Todo from './Todo'

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<CheckBox />} />
//         <Route path='/todo' element={<Todo />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {


//   const [number, setNumber] = useState(0)

//   const [dark, setDark] = useState(false)

//   const slowFunction = (number)=> {
//     for(let i = 0 ; i < 1000; i++){

//     }

//     return number * 2
//   }
  

//   const double = useMemo(()=> {
//     console.log('renderinggg')
//     return slowFunction(number)
//   }, [number])
    

//   const themeStyle = {
//     backgroundColor : dark ? 'black' : 'white',
//     color : dark ? 'white' : 'black'
//   }
  
//   return (
//     <div style={themeStyle}>
//           <p>{double}</p>
//           <input type='number' onChange={(e)=> setNumber(e.target.value)} />
//           <button onClick={()=>setDark((prev) => !prev)}>TOGGLE</button>
//     </div>
//   )
// }

// export default App




// import React, { createContext, useState } from 'react'
// import ChildToParent from './ChildToParent'

// export const InputContext = createContext()



// const App = () => {
//   const [count, setCount] = useState(0)

//   const handleChange = ()=> {
//      setCount((prev)=> prev+1)
//   }

//   return (
//     <InputContext.Provider value={{count, handleChange}}>
//       <ChildToParent/>
//     </InputContext.Provider>
//   )
// }

// export default App

import React from 'react'
import UseInput from './CustomHooks/UseInput'

const App = () => {

  const name = UseInput('');
  return (
    <div>
      <input type='text' {...name}/>
      <p>{name.value}</p>
    </div>
  )
}

export default App
