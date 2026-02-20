import React from 'react';
import ProfileCard from './ProfileCard';
import GreetingApp from './GreetingApp';

const App: React.FC = () => {
  return (
    <div>
      {/* Task 1.1: Profile Card */}
      <div style={{ padding: '40px', backgroundColor: '#f0f0f0' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Task 1.1: Static Profile Card</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProfileCard />
        </div>
      </div>

      <GreetingApp />
    </div>
  );
};

export default App;