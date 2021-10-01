import React, { useState } from 'react'
import Eatery from './Eatery'
import Crabs from './Crabs'

export default function App() {
  const [inEatery, setInEatery] = useState(true)

  return (
    <div>
      <button onClick={() => setInEatery(!inEatery)}>
        Пойти в другое место
      </button>
      {inEatery ? <Eatery /> : <Crabs />}
    </div>
  )
}
