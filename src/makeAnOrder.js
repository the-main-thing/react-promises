import {
  FIRST_MENU_ITEM,
  SECOND_MENU_ITEM,
  MENU_ITEMS_IMAGES_MAP,
} from './constants'

const STATE = {
  resolveFirstDish: false,
  resolveSecondDish: false,
}

export function init() {
  const onKeyup = ({ code }) => {
    if (code === 'KeyJ') {
      STATE.resolveFirstDish = true
    } else if (code === 'KeyK') {
      STATE.resolveSecondDish = true
    }
  }

  document.addEventListener('keyup', onKeyup)
  return () => document.removeEventListener('keyup', onKeyup)
}

export default function makeAnOrder(menuItem) {
  switch (menuItem) {
    case FIRST_MENU_ITEM:
      return new Promise((resolve) => {
        STATE.resolveFirstDish = false
        const interval = setInterval(() => {
          if (STATE.resolveFirstDish) {
            STATE.resolveFirstDish = false
            clearInterval(interval)
            resolve(MENU_ITEMS_IMAGES_MAP[FIRST_MENU_ITEM])
          }
        }, 0)
      })
    case SECOND_MENU_ITEM:
      return new Promise((resolve) => {
        STATE.resolveSecondDish = false
        const interval = setInterval(() => {
          if (STATE.resolveSecondDish) {
            STATE.resolveSecondDish = false
            clearInterval(interval)
            resolve(MENU_ITEMS_IMAGES_MAP[SECOND_MENU_ITEM])
          }
        }, 0)
      })
    default:
      throw new Error('Unknown menu item')
  }
}
