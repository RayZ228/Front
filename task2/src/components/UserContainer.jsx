import { useState } from 'react';
import UserProfile from './UserProfile';

export default function UserContainer() {
  // БЛОК УПРАВЛЕНИЯ (какой ID сейчас)
  const [currentId, setCurrentId] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Лаба 3.2</h1>

      {/* БЛОК КНОПОК */}
      <div style={{ marginBottom: '20px' }}>
        {[1, 2, 3].map(id => (
          <button key={id} onClick={() => setCurrentId(id)} style={{marginRight: '10px'}}>
            Юзер {id}
          </button>
        ))}
        <button onClick={() => setCurrentId(Math.floor(Math.random() * 10) + 1)}>
          Рандом
        </button>
      </div>

      <UserProfile userId={currentId} />
    </div>
  );
}