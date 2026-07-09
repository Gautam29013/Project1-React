import React from 'react'

const Calculator = () => {
  const [input, setInput] = React.useState('')
  const [result, setResult] = React.useState('')

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('')
      setResult('')
      return
    }

    if (value === '⌫') {
      setInput((prev) => prev.slice(0, -1))
      return
    }

    setInput((prev) => prev + value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      const evaluated = Function(`"use strict"; return (${input})`)()
      setResult(evaluated)
    } catch {
      setResult('Error')
    }
  }

  return (
    <div style={{ maxWidth: '260px', margin: '20px auto' }}>
      <h2>Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} readOnly style={{ width: '100%', padding: '8px', marginBottom: '10px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'].map((btn) => (
            <button key={btn} type="button" onClick={() => handleButtonClick(btn)} style={{ padding: '10px' }}>
              {btn}
            </button>
          ))}
          <button type="button" onClick={() => handleButtonClick('C')} style={{ gridColumn: 'span 2', padding: '10px' }}>C</button>
          <button type="button" onClick={() => handleButtonClick('⌫')} style={{ gridColumn: 'span 2', padding: '10px' }}>⌫</button>
          <button type="submit" style={{ gridColumn: 'span 4', padding: '10px' }}>Submit</button>
        </div>
      </form>
      <p><strong>Result:</strong> {result}</p>
    </div>
  )
}

export default Calculator