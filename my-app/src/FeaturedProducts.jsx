import ProductCard from "./ProductCard";
const products = [
  { 
    id: 1, 
    name: "Premium Modern Jacket", 
    price: 129, 
    originalPrice: 169, 
    image: "https://images.unsplash.com/photo-1612126490369-1e886517b615?w=1080", 
    isNew: true, 
    isSale: true 
  },
  { 
    id: 2, 
    name: "Classic Luxury Watch", 
    price: 299, 
    image: "https://images.unsplash.com/photo-1667375565651-b660b574d1a9?w=1080", 
    isNew: true 
  },
  { 
    id: 3, 
    name: "Designer Sunglasses", 
    price: 159, 
    originalPrice: 199, 
    image: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?w=1080", 
    isSale: true 
  },
  { 
    id: 4, 
    name: "Leather Handbag", 
    price: 249, 
    originalPrice: 299, 
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1080", 
    isSale: true 
  },
  { 
    id: 5, 
    name: "Smartphone Pro X", 
    price: 899, 
    originalPrice: 999, 
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080", 
    isSale: true 
  },
 
  
  { 
    id: 6, 
    name: "Smart Fitness Band", 
    price: 79, 
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=1080", 
    isNew: true 
  },
  { 
    id: 7, 
    name: "Office Chair", 
    price: 349, 
    originalPrice: 399, 
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1080", 
    isSale: true 
  }
];



function FeaturedProducts() {
  return (
    <section className="py-5 bg-light">
  
      <div className="container text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Discover our handpicked selection of the most popular items.
        </p>
      </div>

      
      <div className="container">
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-6 col-md-4 col-lg-4" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
