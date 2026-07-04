import React from 'react'

const Counter = () => {
   const [count, setCount] = React.useState(0)

  const increment = () => {setCount(count + 1)}

  const decrement = () => { setCount(count - 1)} 
    return (
      <div className="container">
        <div>
        <h1 className="number">{count}</h1>
        </div>

        <div className="button-container">
          <button onClick={increment} className="increment">+</button>
          <button onClick={decrement} className="decrement">-</button>
        </div>
      </div>
    )
}

export default Counter                 