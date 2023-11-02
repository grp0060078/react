import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () =>{

  const dispatch=useDispatch();
  const counter =useSelector((state) =>state)
  return (
      <div>
        <div>
        count:{counter}

        <button onClick={() =>dispatch({type:"INCR"})}>plus</button>
        <button onClick={() =>dispatch({type:"DECR"})}>minus</button>
        <button onClick={() =>dispatch({type:"ZERO"})}>zero</button>
        </div>
   </div>
  )
   
 }

export default App