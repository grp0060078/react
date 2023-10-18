import React, { useState } from 'react';
import Button from './components/Button';

function App() {

  const [counter, setCounter] = useState(0);


  function handleClick() {
    setCounter(counter + 1);
  }

  function handleMinusClick() {
    setCounter(counter - 1);
  } 
  
  
  function handleZeroClick() {
    setCounter(0);
  }


  return (
    <div>
      <p>{ counter }</p>
      <button onClick={handleClick}>plus</button>
     <Button handleMinusClick={handleMinusClick}/>
      <button onClick={handleZeroClick}>Zero</button>
    </div>
  )
}

export default App;