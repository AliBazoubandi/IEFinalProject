// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Resource Reservation System</h1>
      <p>Please <Link to="/signin">Sign In</Link> to access your dashboard</p>
    </div>
  );
};

export default Home;
