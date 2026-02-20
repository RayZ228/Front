import React from 'react';
import ProfileCard from './ProfileCard';
import GreetingApp from './GreetingApp';

const App: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <ProfileCard />
      <div style={{ marginTop: '40px' }}>
        <GreetingApp />
      </div>
    </div>
  );
};

export default App;