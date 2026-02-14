import { User } from '../types';
import { ReactNode } from 'react';

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: ReactNode;
}

export const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
  return (
    <div style={{ opacity: isActive ? 1 : 0.5, border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{user.name}</h2>
      <p>{user.email} | Age: {user.age}</p>
      {children}
    </div>
  );
};