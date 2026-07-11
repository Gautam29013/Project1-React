import React, { useState } from 'react'

const ToggleBackgroundColor = () => {
  const [isDark, setIsDark] = useState(false)

  const toggleColor = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div
      style={{
        maxWidth: '300px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: isDark ? '#111827' : '#f3f4f6',
        color: isDark ? '#f9fafb' : '#111827',
      }}
    >
      <h2>Toggle Background Color</h2>
      <p>Current theme: {isDark ? 'Dark' : 'Light'}</p>
      <button type="button" onClick={toggleColor}>
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  )
}

export default ToggleBackgroundColor
