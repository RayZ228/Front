function Profile() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Profile</h1>
      <p>Lazy loaded profile page! 👤</p>
      <div style={{
        marginTop: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Role:</strong> Developer</p>
      </div>
    </div>
  )
}

export default Profile