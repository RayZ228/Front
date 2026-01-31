import { useState } from 'react';

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  const lastValues = history.slice(-5);

  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', margin: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>Счетчик шагов</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Текущее: {count}</p>
      <p>Шаг: {step}</p>
      <p>Операций: {operationCount}</p>

      <button onClick={handleIncrement} style={{ marginRight: '10px', padding: '8px 16px' }}>Увеличить (+{step})</button>
      <button onClick={handleDecrement} style={{ marginRight: '10px', padding: '8px 16px' }}>Уменьшить (-{step})</button>
      <button onClick={handleReset} style={{ padding: '8px 16px', backgroundColor: '#ff6b6b', color: 'white' }}>Сбросить</button>

      <h4>История (последние 5):</h4>
      {history.length === 0 ? <p>Пусто</p> : (
        <ul>{lastValues.map((val, i) => <li key={i}>Значение: {val}</li>)}</ul>
      )}
    </div>
  );
}