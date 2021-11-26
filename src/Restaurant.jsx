import React, { useState, useRef, useEffect } from 'react'

import MenuButtons from './MenuButtons'
import Dish from './Dish'
import cookAnOrder from './cookAnOrder'

export default function Restaurant() {
  // блюдо в тарелке
  const [dish, setDish] = useState('')
  // готовим или нет
  const [isCooking, setIsCooking] = useState(false)

  const menuItemRef = useRef()

  useEffect(() => {
    return () => {
      menuItemRef.current = null
    }
  }, [])

  // реагируем на выбор блюда
  const onDishSelect = async (menuItem) => {
    // начинаем готовку
    setIsCooking(true)

    menuItemRef.current = menuItem

    // ждём блюдо
    console.log('Начинаем готовить', menuItem)
    const dish = await cookAnOrder(menuItem)
    console.log(menuItem, 'готовы.')
    // если за время готовки заказ поменялся
    if (menuItem !== menuItemRef.current) {
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
