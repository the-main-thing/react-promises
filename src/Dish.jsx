import { useState, useEffect } from 'react'

import makeAnOrder from './makeAnOrder'

import lebawski from './images/lebawski.gif'

export default function Dish({ dish }) {
  const [dishImage, setDishImage] = useState()
  const [isCooking, setIsCooking] = useState(false)

  useEffect(() => {
    let stillAwaiting = true

    if (dish) {
      async function cook() {
        setIsCooking(true)
        const dishImage = await makeAnOrder(dish)
        if (stillAwaiting) {
          setIsCooking(false)
          setDishImage(dishImage)
        }
      }

      cook()
    }

    return () => {
      stillAwaiting = false
    }
  }, [dish])

  return (
    <div className="dish">
      <h3>Тарелка</h3>
      {(() => {
        switch (true) {
          case isCooking:
            return <img alt="" src={lebawski} />
          case Boolean(dish):
            return <img alt="" src={dishImage} />
          default:
            return null
        }
      })()}
    </div>
  )
}
