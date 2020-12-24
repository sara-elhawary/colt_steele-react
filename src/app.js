import React from 'react'
import { Home } from './components'
import { About } from './components'
import { MoodToggler } from './components'
import { Counter } from './components'
import { Cart } from './components'

export default function App() {
  return (
    <>
      <Cart />
      {/* <Home />
      <About />
      <div className="hero">
        <MoodToggler />
        <Counter step={5} />
      </div> */}
    </>
  )
}
