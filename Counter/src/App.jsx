import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(15);
  
  function addValue() {
    setCounter(counter + 1);
  }

  function removeValue() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter : {counter}</h2> 
      <button onClick={addValue}>Add Value {counter}</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
