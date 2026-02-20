import React from 'react';

const ProfileCard: React.FC = () => {
  const user = {
    name: "Alex Johnson",
    bio: "Frontend Developer",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    buttonText: "Connect"
  };

  const styles = {
    card: {
      width: '320px',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      textAlign: 'center' as const,
      fontFamily: 'system-ui, sans-serif',
    },
    image: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      objectFit: 'cover' as const,
      marginBottom: '16px',
      border: '4px solid #f0f0f0',
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      margin: '0 0 8px 0',
    },
    bio: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5',
      margin: '0 0 20px 0',
    },
    button: {
      padding: '12px 32px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.card}>
      <img src={user.imageUrl} alt={user.name} style={styles.image} />
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.bio}>{user.bio}</p>
      <button style={styles.button}>{user.buttonText}</button>
    </div>
  );
};

export default ProfileCard;