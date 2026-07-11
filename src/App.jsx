import React from 'react'
import Calculator from './components/Calculator.jsx'
import Meals from './components/Meals.jsx'
import ToggleBackgroundColor from './components/ToggleBackgroundColor.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Calculator />
      <Meals />
      <ToggleBackgroundColor />
    </div>
  )
}

export default App