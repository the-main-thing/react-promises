import React, { useState } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import makeAnOrder from './makeAnOrder'

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
    const dish = await makeAnOrder(menuItem)
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
