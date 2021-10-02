import React, { useState, useRef, useEffect } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'

export default function Restaurant() {
  // блюдо в тарелке
  const [dish, setDish] = useState('')

  return (
    <div>
      <h2>Ресторан</h2>
      <MenuButtons onDishSelect={setDish} />
      <Dish dish={dish} />
    </div>
  )
}
