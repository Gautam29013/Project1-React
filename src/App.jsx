import React from 'react'
import Calculator from './components/Calculator.jsx'
import Meals from './components/Meals.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Calculator />
      <Meals />
    </div>
  )
}

export default App