interface ErrorFallbackProps {
  error?: Error
  resetError?: () => void
}

function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#ffebee',
      borderRadius: '8px',
      margin: '2rem'
    }}>
      <h2 style={{ color: '#c62828', marginBottom: '1rem' }}>
        ⚠️ Something went wrong
      </h2>
      {error && (
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Error: {error.message}
        </p>
      )}
      <p style={{ color: '#666' }}>
        The page failed to load. You can try reloading the page.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: '1rem',
          marginRight: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#c62828',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Reload Page
      </button>
    </div>
  )
}

export default ErrorFallback