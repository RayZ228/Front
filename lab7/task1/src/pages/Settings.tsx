function Settings() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Settings</h1>
      <p>This page was also lazy loaded! ⚙️</p>
      <form style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input type="checkbox" /> Enable notifications
        </label>
        <label style={{ display: 'block', marginBottom: '0.5rem' }}>
          <input type="checkbox" /> Dark mode
        </label>
      </form>
    </div>
  )
}

export default Settings