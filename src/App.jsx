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
import React, {useState} from 'react';

function App(){

  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState("");

  function handleShippingChange(event){
    setShipping(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleNameChange(event){
    setName(event.target.value);
  }

  return(
    <>
      <div>
        <input value={name} onChange={handleNameChange}/> 
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery Instructions"></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>

        <p>Payment: {payment}</p>

        <label>
          <input type="radio" value="Pick Up" 
                 checked={shipping === "Pick Up"} 
                 onChange={handleShippingChange}>
          </input>
          Pick Up
        </label>
        <br></br>
        <label>
        <input type="radio" value="Delivery" 
                 checked={shipping === "Delivery"} 
                 onChange={handleShippingChange}>
          </input>
          Delivery
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default App