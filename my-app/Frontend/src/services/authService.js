import api from "./api";

// POST login
export const loginUser = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data; // { message, token }
  } catch (error) {
    // Throw error with backend message
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

// POST registration form
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/register", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};
