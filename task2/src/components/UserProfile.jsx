import { useState, useEffect } from 'react';

export default function UserProfile({ userId }) {
  // БЛОК ДАННЫХ (что храним)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // БЛОК ЗАГРУЗКИ (срабатывает при смене userId)
  useEffect(() => {
    const controller = new AbortController(); // для отмены старых запросов

    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: controller.signal
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message);
        setLoading(false);
      });

    // БЛОК ОЧИСТКИ (убивает запрос если ушел со страницы)
    return () => controller.abort();
  }, [userId]); // зависимость - перезагружаем при смене ID

  // БЛОК ОТОБРАЖЕНИЯ (что показываем)
  if (loading) return <div>Гружу...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!user) return <div>Нет данных</div>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Город: {user.address?.city}</p>
      <button onClick={() => window.location.reload()}>Обновить</button>
    </div>
  );
}