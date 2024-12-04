import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Change as needed

// Sign up API call
export const signUpUser = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/users/signup`, formData);
  return response.data;
};

// Sign in API call
export const signInUser = async (formData) => {
  const response = await axios.post(`${API_BASE_URL}/users/signin`, formData);
  return response.data; // Includes the JWT token
};
