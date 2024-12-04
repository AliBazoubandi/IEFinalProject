import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../services/userService";
import { Container, FormWrapper, Input, Button, Error, Success } from "./SignUp/style";

const SignUp = ({ setIsAuthenticated }) => { // Accept setIsAuthenticated as a prop
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(formData); // Call the API with username, email, and password
      setSuccess("User registered successfully!");
      setError("");
      localStorage.setItem("isAuthenticated", "true"); // Store authentication status
      setIsAuthenticated(true);  // Set the user as authenticated
      navigate("/dashboard");  // Redirect to the dashboard
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setSuccess("");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h1>Sign Up</h1>
        {error && <Error>{error}</Error>}
        {success && <Success>{success}</Success>}
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
