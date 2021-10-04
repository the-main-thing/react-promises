import { StrictMode, useEffect } from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { init } from './cookAnOrder'
import './styles.css'

const RootNode = () => {
  useEffect(init, [])
  return <App />
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <div className="root">
      <RootNode />
    </div>
  </StrictMode>,
  rootElement
)
