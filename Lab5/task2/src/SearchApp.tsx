import { useState, ChangeEvent, MouseEvent } from 'react';
import { User } from './types';
import { UserCard } from './components/UserCard';

const INITIAL_DATA: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 },
  { name: 'Charlie', email: 'charlie@mail.com', age: 35 },
  { name: 'Diana', email: 'diana@mail.com', age: 28 },
  { name: 'Eve', email: 'eve@mail.com', age: 22 },
];

export const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState<string>(''); // string inferred, но явно лучше

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Search</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          style={{ padding: '8px', width: '300px' }}
        />
        <button
          onClick={handleClear}
          style={{ marginLeft: '10px', padding: '8px 16px' }}
        >
          Clear
        </button>
      </div>

      <p>Results: {filteredUsers.length}</p>

      {filteredUsers.length === 0 ? (
        <p style={{ color: 'red' }}>No results found</p>
      ) : (
        filteredUsers.map((user, index) => (
          <UserCard key={index} user={user} isActive={true}>
            <p>Member #{index + 1}</p>
          </UserCard>
        ))
      )}
    </div>
  );
};