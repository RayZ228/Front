import React from 'react';

const GreetingApp: React.FC = () => {
  const hour = new Date().getHours();

  let greeting = '';
  let color = '';

  if (hour >= 6 && hour < 12) {
    greeting = 'Доброе утро';
    color = '#FF9800';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Добрый день';
    color = '#2196F3';
  } else {
    greeting = 'Добрый вечер';
    color = '#9C27B0';
  }

  const styles = {
    wrapper: {
      padding: '30px',
      textAlign: 'center' as const,
      fontFamily: 'Arial, sans-serif',
    },
    text: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: color,
    },
    time: {
      fontSize: '14px',
      color: '#888',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.text}>{greeting}</div>
      <div style={styles.time}>Сейчас {hour}:00</div>
    </div>
  );
};

export default GreetingApp;