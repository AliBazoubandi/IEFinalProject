import api from "../services/api";

export const signUp = async (userData) => {
  try {
    const response = await api.post('/api/users/signup', userData);
    return response.data;
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error;
  }
};

export const signIn = async (userData) => {
  try {
    const response = await api.post('/api/users/signin', userData);
    return response.data;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};
