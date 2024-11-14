import axios from "axios";

// Set up Axios instance with base URL from environment variable
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Ensure REACT_APP_API_URL is set correctly in your .env
  withCredentials: true, // Ensure cookies are included if needed
});

// Export the axios instance for use in other parts of the app
export default api;
