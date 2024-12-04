import React, { useState } from "react";
import { signInUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { Container, FormWrapper, Input, Button, Error, Success } from "./SignIn/style";

const SignIn = ({ setIsAuthenticated }) => { // Accept setIsAuthenticated as a prop
  const [formData, setFormData] = useState({
    username: "",
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
      const response = await signInUser(formData);
      setSuccess("Login successful!");
      setError("");
      localStorage.setItem("token", response.jwtToken);
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
        <h1>Sign In</h1>
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
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Sign In</Button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default SignIn;
