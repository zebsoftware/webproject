// =============================
// Dummy Product Data (In-Memory)
// =============================
let products = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 129,
    originalPrice: 169,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080",
    description: "A sleek, modern T-Shirt with high-quality fabric, perfect for style and warmth.",
    isNew: true,
    isSale: true,
    stock: 40,
    inStock: true,
  },
  {
    id: 2,
    name: "Classic Luxury Watch",
    price: 299,
    image: "https://images.unsplash.com/photo-1667375565651-b660b574d1a9?w=1080",
    description: "An elegant analog wristwatch with premium leather strap and precise timekeeping.",
    isNew: true,
    stock: 20,
    inStock: true,
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 159,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?w=1080",
    description: "Trendy designer sunglasses with UV400 protection and polarized lenses for clear vision.",
    isSale: true,
    stock: 15,
    inStock: true,
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 249,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1080",
    description: "A premium leather handbag for all occasions — durable, spacious, and stylish.",
    isSale: true,
    stock: 12,
    inStock: true,
  },
  {
    id: 5,
    name: "Smartphone Pro X",
    price: 899,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080",
    description: "Experience next-gen speed and clarity with the Pro X smartphone’s high-end processor and camera.",
    isSale: true,
    stock: 8,
    inStock: true,
  },
  {
    id: 6,
    name: "Smart Fitness Band",
    price: 79,
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=1080",
    description: "Track your steps, sleep, and heart rate with this water-resistant fitness band.",
    isNew: true,
    stock: 30,
    inStock: true,
  },
  {
    id: 7,
    name: "Office Chair",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1080",
    description: "Ergonomic office chair with adjustable lumbar support and breathable mesh fabric.",
    isSale: true,
    stock: 10,
    inStock: true,
  },
  {
    id: 8,
    name: "Gaming Laptop X15",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1080",
    description: "High-performance gaming laptop with RTX graphics, 16GB RAM, and a blazing fast SSD.",
    isNew: true,
    stock: 5,
    inStock: true,
  },
];


// GET ALL PRODUCTS
export const getProducts = (req, res) => {
  console.log(" [Backend] Products fetched successfully");
  res.json(products);
};



// GET PRODUCT BY ID

export const getProductById = (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  console.log(`[Backend] Product ${req.params.id} fetched`);
  res.json(product);
};



// ADD PRODUCT (ADMIN)

export const addProduct = (req, res) => {
  try {
    const newProduct = {
      ...req.body,
      id: products.length + 1,
    };

    products.push(newProduct);

    console.log(" [Backend] Product added:", newProduct);

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (err) {
    console.error(" [Backend] Error adding product:", err);
    res.status(500).json({ message: "Server error" });
  }
};
// UPDATE PRODUCT (ADMIN)

export const updateProduct = (req, res) => {
  const { id } = req.params;

  try {
    const index = products.findIndex((p) => p.id == id);

    if (index === -1)
      return res.status(404).json({ message: "Product not found" });

    const updatedProduct = { ...products[index], ...req.body };
    products[index] = updatedProduct;

    console.log(` [Backend] Product ${id} updated:`, updatedProduct);

    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    console.error(` [Backend] Error updating product ${id}:`, err);
    res.status(500).json({ message: "Server error" });
  }
};



// DELETE PRODUCT 

export const deleteProduct = (req, res) => {
  const { id } = req.params;

  try {
    const index = products.findIndex((p) => p.id == id);

    if (index === -1)
      return res.status(404).json({ message: "Product not found" });

    products.splice(index, 1);

    console.log(`[Backend] Product ${id} deleted`);

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(`[Backend] Error deleting product ${id}:`, err);
    res.status(500).json({ message: "Server error" });
  }
};
