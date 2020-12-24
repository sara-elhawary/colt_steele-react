import React, { useState } from 'react'
import './index.css'

export default function Counter({ step = 1 }) {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <h3>{count}</h3>
      <button onClick={() => setCount(count + step)}>Increment</button>
    </div>
  )
}
