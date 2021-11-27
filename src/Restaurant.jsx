import React, { useState, useEffect } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import cookAnOrder from './cookAnOrder'

function useKitchen(order) {
  const [dish, setDish] = useState('')
  const [isCooking, setIsCooking] = useState(false)
  useEffect(() => {
    if (order) {
      let stillAwaiting = true
      setIsCooking(true)
      async function cook() {
        console.log('Начинаем готовить', order)
        const dish = await cookAnOrder(order)
        console.log(order, 'готовы')
        if (stillAwaiting) {
          console.log('Сервируем', order)
          setIsCooking(false)
          setDish(dish)
        }
      }
      cook()
      return () => {
        stillAwaiting = false
      }
    }
  }, [order])
  return {
    dish,
    isCooking,
  }
}

export default function Restaurant() {
  const [order, setOrder] = useState('')
  const { dish, isCooking } = useKitchen(order)

  return (
    <div>
      <h2>Ресторан</h2>
      <MenuButtons onDishSelect={setOrder} />
      <Dish dish={dish} isCooking={isCooking} />
    </div>
  )
}
