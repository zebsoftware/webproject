import ProductCard from "./ProductCard";
const products = [
  { 
    id: 1, 
    name: "Premium Modern Jacket", 
    price: 129, 
    originalPrice: 169, 
    image: "/images/hero.png", 
    isNew: true, 
    isSale: true 
  },
  { 
    id: 2, 
    name: "Classic Luxury Watch", 
    price: 299, 
    image: "/images/shoes.png", 
    isNew: true 
  },
  { 
    id: 3, 
    name: "Designer Sunglasses", 
    price: 159, 
    originalPrice: 199, 
    image: "/images/accessories.png", 
    isSale: true 
  },
  { 
    id: 4, 
    name: "Leather Handbag", 
    price: 249, 
    originalPrice: 299, 
    image: "/images/hero.png", 
    isSale: true 
  },
  { 
    id: 5, 
    name: "Smartphone Pro X", 
    price: 899, 
    originalPrice: 999, 
    image: "/images/electronic.png", 
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
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
