import React, { useState } from 'react'

export default function MoodToggler() {
  const [isHappy, setIsHappy] = useState(true)
  const toggleIsHappy = () => setIsHappy(!isHappy)
  const styles = { color: isHappy ? 'green' : 'red' }
  return (
    <div className="toggler">
      <h3 style={styles}>{isHappy ? ':)' : ':('}</h3>
      <button onClick={toggleIsHappy}>Toggle</button>
    </div>
  )
}
