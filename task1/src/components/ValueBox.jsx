import { useState } from 'react';

export default function ValueBox({ startValue = 0, stepValue = 1 }) {

  const [current, setCurrent] = useState(startValue);
  const [changeLog, setChangeLog] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const increaseValue = () => {
    const next = current + stepValue;
    setCurrent(next);
    setChangeLog([...changeLog, next]);
    setClickCount(clickCount + 1);
  };

  const decreaseValue = () => {
    const next = current - stepValue;
    setCurrent(next);
    setChangeLog([...changeLog, next]);
    setClickCount(clickCount + 1);
  };

  const resetAll = () => {
    setCurrent(startValue);
    setChangeLog([]);
    setClickCount(0);
  };

  const recentFive = changeLog.slice(-5);


  return (
    <div style={{
      backgroundColor: '#1a1a2e',
      color: '#eee',
      padding: '24px',
      margin: '12px',
      borderRadius: '16px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      minWidth: '280px',
      border: '1px solid #16213e'
    }}>
      <h2 style={{ color: '#e94560', marginTop: 0 }}>Калькулятор шагов</h2>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f3460' }}>
          {current}
        </p>
        <p style={{ color: '#aaa', fontSize: '14px' }}>Шаг: {stepValue}</p>
        <p style={{ color: '#e94560', fontSize: '14px' }}>Всего кликов: {clickCount}</p>
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '8px' }}>
        <button
          onClick={increaseValue}
          style={{
            backgroundColor: '#e94560',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            flex: 1
          }}
        >
          +{stepValue}
        </button>
        <button
          onClick={decreaseValue}
          style={{
            backgroundColor: '#16213e',
            color: '#e94560',
            border: '1px solid #e94560',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            fontWeight: 'bold',
            flex: 1
          }}
        >
          -{stepValue}
        </button>
      </div>

      <button
        onClick={resetAll}
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          color: '#aaa',
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '8px',
          cursor: 'pointer',
          marginBottom: '16px'
        }}
      >
        Сбросить всё
      </button>

      <div style={{
        backgroundColor: '#16213e',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '13px'
      }}>
        <h4 style={{ margin: '0 0 8px 0', color: '#e94560' }}>История (5 последних):</h4>
        {changeLog.length === 0 ? (
          <span style={{ color: '#666' }}>Пусто</span>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {recentFive.map((val, idx) => (
              <span key={idx} style={{
                backgroundColor: '#0f3460',
                padding: '4px 8px',
                borderRadius: '4px',
                color: '#eee'
              }}>
                {val}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}