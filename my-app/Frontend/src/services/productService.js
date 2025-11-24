import axios from "axios";

const API_BASE = "https://backend-16lc.onrender.com/api";

// ✅ Get all products
export const getProducts = async () => {
  try {
    const res = await axios.get(`${API_BASE}/products`);
    // normalize response to always return array
    if (Array.isArray(res.data)) return res.data;
    if (Array.isArray(res.data.products)) return res.data.products;
    return [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
};

// ✅ Get single product by ID
export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/products/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    return null; // return null if not found
  }
};
