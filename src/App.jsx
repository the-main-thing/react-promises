import React, { useState } from 'react'
import Restaurant from './Restaurant'
import Crabs from './Crabs'

export default function App() {
  const [inEatery, setInEatery] = useState(true)

  return (
    <div>
      <button onClick={() => setInEatery(!inEatery)}>
        Пойти в другое место
      </button>
      {inEatery ? <Restaurant /> : <Crabs />}
    </div>
  )
}
