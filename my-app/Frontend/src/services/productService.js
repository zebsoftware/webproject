
  import axios from "axios";

  const API_BASE = "http://localhost:5000/api";

  export const getProducts = async () => {
    
      const res = await axios.get(`${API_BASE}/products`);

      return res.data;
    } ;
    


  export const getProductById = async (id) => {
    
      const res = await axios.get(`${API_BASE}/products/${id}`);
      return res.data;
    
  };
