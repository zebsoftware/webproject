import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getAllProducts = async () => {
  return axios.get(API_URL);
};

export const addProduct = async (formData) => {
  return axios.post(API_URL, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const updateProduct = async (id, formData) => {
  return axios.put(`${API_URL}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteProduct = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
