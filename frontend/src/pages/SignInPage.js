import React, { useState } from 'react';
import SignInForm from '../components/Auth/SignInForm';
import Dashboard from '../components/Dashboard';

const SignInPage = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = (userData) => {
    setUser(userData);
  };

  return user ? (
    <Dashboard user={user} />
  ) : (
    <div>
      <SignInForm onSignIn={handleSignIn} />
    </div>
  );
};

export default SignInPage;
