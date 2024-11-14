import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our application!</p>
      <Link to="/signin">Sign In</Link> or <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default HomePage;
