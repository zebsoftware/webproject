
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${API_BASE}/products`);
    console.log("Products fetched successfully:", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/products/${id}`);
    console.log(`Product ${id} fetched successfully:`, res.data);
    return res.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};
