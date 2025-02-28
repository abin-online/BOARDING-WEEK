import React, { useState } from 'react'
import TextForm from './Child'

const Greetings = () => {
    const [name, setName] =  useState('')

  return (
    <div>
        <h1>Hello {name}</h1>
        <TextForm setName={setName}/>
    </div>
  )
}

export default Greetings


// import React, { useState } from "react";

// function TextForm({ setName, setShow }) {
//   const [inputName, setInputName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setName(inputName); // Pass name to parent component
//     setShow(true); // Show the name in Greetings
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Enter your name"
//         value={inputName}
//         onChange={(e) => setInputName(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// function Greetings() {
//   const [name, setName] = useState('');
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <h1>
//         Hello {show && <span>{name}</span>}
//       </h1>
//       <hr />
//       <TextForm setName={setName} setShow={setShow} />
//     </>
//   );
// }

// export default Greetings;
