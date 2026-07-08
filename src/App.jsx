import React from 'react'
import Counter from './components/counter.jsx'
import Todo from './components/Todo.jsx'

const App = () => {
  return (
    <div className="app-container">
      <Counter />
      <Todo />
    </div>
  )
}

export default App