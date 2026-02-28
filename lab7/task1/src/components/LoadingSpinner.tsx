function LoadingSpinner() {
    return (
        <div style={{
            textAlign: 'center',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <div className='spinner'></div>
            <p>Loading page...</p>
        </div>
    )
}

export default LoadingSpinner