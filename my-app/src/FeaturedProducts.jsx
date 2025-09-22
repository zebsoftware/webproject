
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Premium Modern Jacket", price: 129, originalPrice: 169, image: "https://images.unsplash.com/photo-1612126490369-1e886517b615?w=1080", isNew: true, isSale: true },
  { id: 2, name: "Classic Luxury Watch", price: 299, image: "https://images.unsplash.com/photo-1667375565651-b660b574d1a9?w=1080", isNew: true },
  { id: 3, name: "Designer Sunglasses", price: 159, originalPrice: 199, image: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?w=1080", isSale: true }
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
