// React hook - Special function that allows functional components
// to use React features without writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback, and more)

// useState() - A React hook that allows the creation of a stateful variable
// AND a setter function to update its value in the virtual DOM.
// (name, setName)

// import Counter from './Counter';
// import MyComponent from './MyComponent';

// function App(){
 
//   return(
//     <>
//       <Counter />
//       {/* <MyComponent /> */}
//     </>);
// }

// onChange - event handler used primarily with form elements
// ex: <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes
// import React, {useState} from 'react';

// function App(){
//   const [name, setName] = useState("")
//   const [payment, setPayment] = useState("")
//   const [shipping, setShipping] = useState("")
//   const [number, setNumber] = useState(0)
//   const handleNameChange = (e) => {
//     setName(e.target.value)
//   }
//   const handlePaymentChange = (e) => {
//     setPayment(e.target.value)
//   }
//   const handleShippingChange = (e) => {
//     setShipping(e.target.value)
//   }
//   const handleNumberChange = (e) => {
//     setNumber(e.target.value)
//   }
 
//   return(
//     <>
//       <div>
//         <input value={name} onChange={handleNameChange}>
//         </input>
//         <p>{name}</p>
//         <select value={payment} onChange={handlePaymentChange}>
//           <option value="Visa">Visa</option>
//           <option value="MasterCard">MasterCard</option>
//         </select>
//         <p>{payment}</p>
//         <label>
//           <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
//           Pick Up
//         </label>
//         <label>
//           <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
//           Delivery
//         </label>
//         <p>{shipping}</p>
//         <label>
//           <input type="number" value={number} onChange={handleNumberChange}/>
//           <br/>
//           Pick a number
//         </label>
//         <p>{number}</p>
//         <textarea placeholder="enter delivery instructions"/>
//         </div>
//     </>
//   );
// }
import ColorPicker from './ColorPicker';

function App(){
  return(<>
  <ColorPicker />
        
        </>);
}
export default App