import { useState } from 'react'

function BuggyPage() {
  const [shouldCrash, setShouldCrash] = useState(false)

  if (shouldCrash) {
    // Искусственно вызываем ошибку
    throw new Error('Test error: Page crashed!')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Test Error Boundary</h1>
      <p>Нажми кнопку, чтобы смоделировать ошибку:</p>
      <button
        onClick={() => setShouldCrash(true)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#c62828',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        💥 Crash Page
      </button>
    </div>
  )
}

export default BuggyPage