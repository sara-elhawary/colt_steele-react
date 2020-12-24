import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
