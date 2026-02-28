function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>This page was lazy loaded! 🚀</p>
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3>Stats</h3>
        <p>Users: 1,234</p>
        <p>Revenue: $12,345</p>
      </div>
    </div>
  )
}

export default Dashboard