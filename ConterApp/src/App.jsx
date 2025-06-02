import React, { useState } from 'react'
import './index.css'
export default function App() {

  const [count, setcount] = useState(0)

  const handleIncrement = () => {
    setcount(count + 1)
  }
  const handleDecrement = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }
  const handleReset = () => {
    setcount(0)
  }



  // Add Css here



  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>Counter App</h1>
      <h2>count: {count}</h2>

      <div className="btnCtn">
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleDecrement} >Decrement</button>
        <button onClick={handleReset}>Reset</button>

      </div>
    </div>
  )
}
