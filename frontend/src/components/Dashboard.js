import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h1>Welcome, {user?.username || 'User'}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
