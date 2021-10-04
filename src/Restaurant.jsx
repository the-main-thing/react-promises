import React, { useState } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import cookAnOrder from './cookAnOrder'

export default function Restaurant() {
  // блюдо в тарелке
  const [dish, setDish] = useState('')
  // готовим или нет
  const [isCooking, setIsCooking] = useState(false)

  // реагируем на выбор блюда
  const onDishSelect = async (menuItem) => {
    if (isCooking) {
      return
    }
    // начинаем готовку
    setIsCooking(true)
    // ждём блюдо
    console.log('Начинаем готовить', menuItem)
    const dish = await cookAnOrder(menuItem)
    console.log(menuItem, 'готовы. Сервируем')
    // заканчиваем готовку
    setIsCooking(false)
    // сервируем блюдо
    setDish(dish)
  }

  return (
    <div>
      <h2>Ресторан</h2>
      <MenuButtons onDishSelect={onDishSelect} />
      <Dish dish={dish} isCooking={isCooking} />
    </div>
  )
}
