import React, { useState } from 'react';
import { signIn } from "../../api/auth";

const SignInForm = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { username, password };
      const response = await signIn(userData); // Use signIn function from API service
      if (response) {
        onSignIn(response); // Pass response to onSignIn
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
