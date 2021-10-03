import React, { useState, useRef } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import makeAnOrder from './makeAnOrder'

export default function Restaurant() {
  // блюдо в тарелке
  const [dish, setDish] = useState('')
  // готовим или нет
  const [isCooking, setIsCooking] = useState(false)

  const promiseRef = useRef()

  // реагируем на выбор блюда
  const onDishSelect = async (menuItem) => {
    // начинаем готовку
    setIsCooking(true)

    const promise = makeAnOrder(menuItem)
    promiseRef.current = promise

    // ждём блюдо
    console.log('Начинаем готовить', menuItem)
    const dish = await promise
    console.log(menuItem, 'готовы')

    // если за время готовки поменялся промис
    if (promise !== promiseRef.current) {
      return
    }
    console.log('Сервируем', menuItem)
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
