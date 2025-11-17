import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// fetch all products
router.get("/", getProducts); 
// fetch single product
router.get("/:id", getProductById); 

// add product
router.post("/", addProduct); 
// edit product
router.put("/:id", updateProduct); 
// delete product
router.delete("/:id", deleteProduct); 

export default router;
