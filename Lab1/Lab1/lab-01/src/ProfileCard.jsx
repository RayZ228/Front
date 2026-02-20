import React from 'react';

const ProfileCard: React.FC = () => {
  const user = {
    name: "Арсен",
    bio: "Студент.",
    imageUrl: "https://i.pravatar.cc/300?img=11",
    buttonText: "Написать"
  };

  const styles = {
    card: {
      width: '300px',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      textAlign: 'center' as const,
      fontFamily: 'Arial, sans-serif',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '12px',
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      margin: '0 0 8px 0',
    },
    bio: {
      fontSize: '13px',
      color: '#666',
      margin: '0 0 16px 0',
      lineHeight: '1.4',
    },
    button: {
      padding: '10px 24px',
      fontSize: '14px',
      color: '#fff',
      backgroundColor: '#4CAF50',
      border: 'none',
      borderRadius: '6px',
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