import axios from "axios";

const API_URL = "https://backend-16lc.onrender.com/api/products";

// Function to get token safely
const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token found. Please login first.");
  return token;
};

// GET all products
export const getAllProducts = async () => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

// ADD product
export const addProduct = async (formData) => {
  return axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

// UPDATE product
export const updateProduct = async (id, formData) => {
  return axios.put(`${API_URL}/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

// DELETE product
export const deleteProduct = async (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};
