import React from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import cookAnOrder from './cookAnOrder'

export default function Restaurant() {
  // блюдо в тарелке
  const [dish, setDish] = React.useState('')
  // готовим или нет
  const [isCooking, setIsCooking] = React.useState(false)

  // реагируем на выбор блюда
  async function onDishSelect(menuItem) {
    // начинаем готовку
    setIsCooking(true)
    // ждём блюдо
    const dish = await cookAnOrder(menuItem)
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
