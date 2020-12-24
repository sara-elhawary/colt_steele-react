import React, { useState } from 'react'

export default function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true)
  const toggleIsHappy = () => setIsHappy(!isHappy)
  return (
    <div>
      <h3>{isHappy ? ':)' : ':('}</h3>
      <button onClick={toggleIsHappy}>Toggle</button>
    </div>
  )
}
