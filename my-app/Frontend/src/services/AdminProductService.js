
import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getAllProducts = () => axios.get(API_URL);
export const addProduct = (product) => axios.post(API_URL, product);
export const updateProduct = (id, updatedData) => axios.put(`${API_URL}/${id}`, updatedData);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);
