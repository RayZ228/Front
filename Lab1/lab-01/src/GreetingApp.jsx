import React from 'react';

const GreetingApp: React.FC = () => {
  const now = new Date();
  const currentHour = now.getHours();

  let greeting = '';
  let textColor = '';

  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Good Morning';
    textColor = '#FF9800';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good Afternoon';
    textColor = '#2196F3';
  } else {
    greeting = 'Good Evening';
    textColor = '#673AB7';
  }

  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const timeString = now.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit'
  });

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'system-ui, sans-serif',
    },
    card: {
      padding: '48px',
      borderRadius: '20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      textAlign: 'center' as const,
    },
    greeting: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: textColor,
      margin: '0 0 16px 0',
    },
    date: { fontSize: '20px', color: '#666', margin: '0 0 8px 0' },
    time: { fontSize: '18px', color: '#999', margin: 0 },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.greeting}>{greeting}</h1>
        <p style={styles.date}>{dateString}</p>
        <p style={styles.time}>{timeString}</p>
      </div>
    </div>
  );
};

export default GreetingApp;