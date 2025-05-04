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

// import React from 'react'
// import UseInput from './CustomHooks/UseInput'

// const App = () => {

//   const name = UseInput('');
//   return (
//     <div>
//       <input type='text' {...name}/>
//       <p>{name.value}</p>
//     </div>
//   )
// }

// export default App


// import React, { useCallback, useEffect, useState } from 'react'

// const Child = ({getItems}) => {

//   useEffect(()=> {
//     console.log(' re created')
//   },[getItems])

//   return (
//     <div>
//         {getItems().map((x)=> {
//           return <p>{x}</p>
//         })}
//     </div>
//   )
// }


// const App = () => {

//   const getItems = useCallback(()=> {
//     return [11, 12, 13]
//   },[])

//   const  [flag, setFlag] = useState(false)
//   return (
//     <div>
//         <Child getItems={getItems} />
//         <button onClick={()=> setFlag((prev)=> !prev)}>{flag ? 'Hiii' : 'Hello'}</button>
//     </div>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react'

// const App = () => {

//   const [dark, setDark] = useState(false)


//   const theme = {
//     backgroundColor : dark ? 'black' : 'white',
//     color : dark ? 'white' : 'black'
//   }

//   const increment = useMemo(()=> {
//     console.log('Re rendered')
//     for(let i = 0 ; i < 100000000; i++) {

//     }
//     return 100
//   }, [])

//   return (
//     <div style={theme}>
//       <p> USEMEMO EXAMPLE</p>
//           <p>{increment}</p>
//           <button onClick={()=> setDark(prev => !prev)}>TOGGLE</button>

//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0)
//   const [incrementing, setIncrementing] = useState(true)

//   useEffect(() => {
//     const Interval = setInterval(() => {
//       setCount((prev) => {
//         if (prev == 10) {
//           setIncrementing(false); 
//         } else if (prev == 0) {
//           setIncrementing(true)
//           return prev + 1
//         }
//         return incrementing ? prev + 1 : prev - 1
//       })

//     }, 1000);

//     return () => clearInterval(Interval)
//   }, [incrementing])

//   return (
//     <div>
//       <p>{count}</p>
//     </div>
//   )
// }

// export default App


// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, reset } from './app/counterSlice';

// const App = () => {
//   const dispatch = useDispatch();
//   const count = useSelector((state) => state.count);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(increment())}>INCREMENT</button>
//       <button onClick={() => dispatch(decrement())}>DECREMENT</button>
//       <button onClick={() => dispatch(reset())}>RESET</button>
//     </div>
//   )
// }

// export default App


//TIMER UPTO  0 -> 10 -> 0

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { tick } from './tenTimer/tenCounter';

// const App = () => {

//   const dispatch = useDispatch()
//   const count = useSelector((state) => state.counter.count);

//   useEffect(() => {
//     const timer = setInterval(() => {
//         dispatch(tick())
//     }, 1000);

//     return ()=> clearInterval(timer)
//   }, [dispatch])


//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchUser } from './AsyncThunk/userSlice'
// import { fetchPhoto } from './AsyncThunk/photoSlice';
// import axios from 'axios';

// const App = () => {
//   const dispatch = useDispatch();

//   const { user, loading, error } = useSelector((state) => state.photoSlice);

//   useEffect(() => {
//     //dispatch(fetchPhoto());

//     const fetchPhoto = async()=> {
//       const response = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
//       const data = response
//       const randomIndex = Math.floor(Math.random() * 10000) % data.length;
//       console.log(data)
//       //return data[randomIndex]
//   }   

//   fetchPhoto()
//   }, [dispatch]);

//   return (
//   <>
//   </>
//   )
// }

// export default App


// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPhoto } from './AsyncThunk/photoSlice';

// const App = () => {

//   const dispatch = useDispatch();
//   const { photo, error, loading } = useSelector((state) => state.photo)

//   useEffect(() => {
//     dispatch(fetchPhoto())
//   }, [dispatch])

//   return (
//     <>
//       {loading ? <p>LOADING</p> : <div className="photo-card">
//         <h3>{photo?.title}</h3>
//         <img src={photo?.url} alt={photo?.title} width="300" />
//         <p><strong>Album ID:</strong> {photo?.albumId}</p>
//         <p><strong>Photo ID:</strong> {photo?.id}</p>
//       </div>}
//       {error && <p>{error}</p>}
//     </>

//   )
// }

// export default App


//CONTEXT

// import React, { useState } from 'react'
// import CONTEXT from './newContext/Context'
// import BOX from './newContext/BOX'

// const App = () => {
//   const [value, setValue] = useState(false)
//   return (
//     <CONTEXT.Provider value={value}>
//         <BOX/>
//         <button onClick={()=> setValue(prev => !prev)}>TOGGLE</button>
//     </CONTEXT.Provider>
//   )
// }

// export default App


//counter using todo app
// import React, { useReducer } from 'react'

// const App = () => {

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'INCREMENT': return {
//         count: state.count + 1
//       }

//       case 'DECREMENT': return {
//         count: state.count - 1
//       }

//       case 'RESET': return {
//         count: 0
//       }

//       default: return {
//         count: 1
//       }
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
//     </>
//   )
// }

// export default App

// import React, { useReducer, useState } from 'react'

// const App = () => {

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'ADD_TODO':
//         return [...state,
//         {
//           id: Date.now(),
//           text: action.payload,
//           completed: false
//         }
//         ]
//       case 'DELETE_TODO':
//         return state.filter(todo => todo.id !== action.payload)

//       case 'TOGGLE':
//         return state.map((item) => {
//           return item.id == action.payload ? { ...item, completed: !item.completed } : item
//         })

//       case 'CLEAR': return []
//       default: return state
//     }
//   }

//   const [todos, dispatch] = useReducer(reducer, []);
//   const [input, setInput] = useState('');


//   const addTodo = () => {
//     if (input.trim()) {
//       dispatch({ type: 'ADD_TODO', payload: input })
//       setInput('')
//     }
//   }

//   const toggleTask = (item_id) => {
//     console.log('id ', item_id)
//     dispatch({ type: 'TOGGLE', payload: item_id })
//   }

//   const deleteItem = (item_id) => {
//     dispatch({ type: 'DELETE_TODO', payload: item_id })
//   }

//   const clear = () => {
//     dispatch({ type: 'CLEAR' })
//   }
//   return (
//     <div>
//       <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />;
//       <button onClick={addTodo}>ADD TODO</button>
//       <br />
//       <button onClick={clear}>CLEAR</button>
//       <br />
//       {todos.map((item, index) => {
//         return <p key={item?.id?.toString()}>{index + 1} {item?.text}
//           <span>
//             <button onClick={() => deleteItem(item?.id)}>DELETE</button>
//             <input type='checkbox' value={item?.completed} onChange={() => toggleTask(item?.id)} />
//           </span>
//         </p>
//       })}
//     </div>
//   )
// }

// export default App


//ref example

// import React, { useRef } from 'react'

// const App = () => {
//   const inputRef = useRef(null);

//   const focusInput = ()=> {
//     console.log(inputRef.current.value)
//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <input ref={inputRef} type='text'/>
//       <button onClick={focusInput}>FOCUS</button>
//     </div>
//   )
// }

// export default App


// import React, { forwardRef, useRef } from 'react'


// const Child = forwardRef((props, ref) => {
//   return (
//     <div>
//       <input ref={ref}  {...props} />
//     </div>
//   )
// });



// const App = () => {

//   const inputRef = useRef();

//   return (
//     <div>
//       <Child ref={inputRef} placeholder='Type cheyyada'/>
//     </div>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {

// const [overs, setOvers] = useState(0)
// const [ball, setBall] = useState(0)
// const [runs, setRuns] = useState(0)
// const runRate = useMemo(()=> {
//     const decimal = parseFloat(ball / 6);
//     const oversToDivide = parseInt(overs) + parseFloat(decimal);
//     return runs / oversToDivide
// },[overs, ball, runs]);

//   return (
//     <div>
//       <p>Enter runs scored </p> <input type='text' onChange={(e)=> setRuns(e.target.value)}/> 
//       <p>Enter the over completed  </p> <input type='text'value={overs} style={{width: '20px'}} onChange={(e)=> setOvers(e.target.value)}/>.<input type='text' style={{width: '20px'}} value={ball} onChange={(e)=> setBall(e.target.value)}/> 
//       <h6>{runRate}</h6>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ThrottleScrollExample from './Throttling/Scroll'
// import Todo from './TODO/Todo'
// import Reducer from './COUNTER/Reducer'

// const App = () => {
//   return (
//     <div>
//       {/* <ThrottleScrollExample/> */}
//       {/* <Todo/> */}
//       <Reducer/>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'
// import Context from './SIBBLINGS/Contex'
// import Component1 from './SIBBLINGS/Component1'
// import Component2 from './SIBBLINGS/Component2'

// const App = () => {
//   const [data, setData] = useState()
//   return (
//     <Context.Provider value={data}>
//       <Component1/>
//       <Component2/>
//     </Context.Provider>
//   )
// }

// export default App

// import React from 'react'
// import Head from './HEAD/Head'

// const App = () => {

//   return (
//     <div>
//           <Head/>
//     </div>
//   )
// }

// export default App


// import React, { Suspense } from 'react'
// import Tabs from './MACHINETASKS/Tabs'
// import Pagination from './MACHINETASKS/Pagination'
// import Products from './MACHINETASKS/Products'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Fallback from './MACHINETASKS/Fallback'
// import AutoComplete from './MACHINETASKS/AutoComplete'
// import Password from './MACHINETASKS/Password'
// // import ProductDetail from './MACHINETASKS/ProductDetails'
// const ProductDetail = React.lazy(()=> import('./MACHINETASKS/ProductDetails'))
// const App = () => {
//   return (
// <Router>
//     <Suspense fallback={<Fallback/>}>
//   <Routes>
//     <Route path='/' element={<Products/>}/>
//     <Route path='/otp' element={<Password/>}/>   

//     <Route path='/shop' element={<AutoComplete/>}/>   
//     <Route path="/product/:id" element={<ProductDetail/>} />
//   </Routes>
//     </Suspense>
// </Router>
//   )
// }

// export default App



import React from 'react'
import Password from './MACHINETASKS/Password'
import Signup from './MACHINETASKS/Signup'

const App = () => {
  return (
    <div>
      {/* <Password/> */}
      <Signup/>
    </div>
  )
}

export default App
