import React, { useState, useEffect } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import cookAnOrder from './cookAnOrder'

function Kitchen({ order }) {
  const [dish, setDish] = useState('')
  const [isCooking, setIsCooking] = useState(false)
  useEffect(() => {
    if (order) {
      setIsCooking(true)
      let stillAwaiting = true
      async function cook() {
        console.log('Начинаем готовить', order)
        const dish = await cookAnOrder(order)
        console.log(order, 'готовы.')
        if (stillAwaiting) {
          console.log('Сервируем', order)
          setIsCooking(false)
          setDish(dish)
        }
      }
      cook()
      return function cleanUp() {
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
