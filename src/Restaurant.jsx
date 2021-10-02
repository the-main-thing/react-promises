import React, { useState, useEffect } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import makeAnOrder from './makeAnOrder'

function Kitchen({ order }) {
  const [dish, setDish] = useState('')
  const [isCooking, setIsCooking] = useState(false)

  useEffect(() => {
    if (order) {
      let stillAwaiting = true
      setIsCooking(true)

      async function cook() {
        const dish = await makeAnOrder(order)
        if (stillAwaiting) {
          setDish(dish)
          setIsCooking(false)
        }
      }

      cook()

      return () => {
        stillAwaiting = false
      }
    }
  }, [order])

  return <Dish dish={dish} isCooking={isCooking} />
}

export default function Restaurant() {
  // блюдо в тарелке
  const [dish, setDish] = useState('')

  return (
    <div>
      <h2>Ресторан</h2>
      <MenuButtons onDishSelect={setDish} />
      <Kitchen order={dish} />
    </div>
  )
}
