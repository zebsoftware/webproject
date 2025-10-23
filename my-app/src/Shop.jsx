import React from "react";
import { Link } from "react-router-dom";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: 129,
      originalPrice: 169,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1080",
      description: "A sleek, modern T-Shirt with high-quality fabric, perfect for style and warmth.",
      isNew: true,
      isSale: true,
    },
    {
      id: 2,
      name: "Classic Luxury Watch",
      price: 299,
      image: "https://images.unsplash.com/photo-1667375565651-b660b574d1a9?w=1080",
      description: "An elegant analog wristwatch with premium leather strap and precise timekeeping.",
      isNew: true,
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1523754865311-b886113bb8de?w=1080",
      description: "Trendy designer sunglasses with UV400 protection and polarized lenses for clear vision.",
      isSale: true,
    },
    {
      id: 4,
      name: "Leather Handbag",
      price: 249,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1080",
      description: "A premium leather handbag for all occasions — durable, spacious, and stylish.",
      isSale: true,
    },
    {
      id: 5,
      name: "Smartphone Pro X",
      price: 899,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1080",
      description: "Experience next-gen speed and clarity with the Pro X smartphone’s high-end processor and camera.",
      isSale: true,
    },
    {
      id: 6,
      name: "Smart Fitness Band",
      price: 79,
      image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=1080",
      description: "Track your steps, sleep, and heart rate with this water-resistant fitness band.",
      isNew: true,
    },
    {
      id: 7,
      name: "Office Chair",
      price: 349,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1080",
      description: "Ergonomic office chair with adjustable lumbar support and breathable mesh fabric.",
      isSale: true,
    },
    {
      id: 8,
      name: "Gaming Laptop X15",
      price: 1299,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1080",
      description: "High-performance gaming laptop with RTX graphics, 16GB RAM, and a blazing fast SSD.",
      isNew: true,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Explore Our Collection</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-3 mb-4">
            <div className="card shadow-sm h-100 border-0">
              <div style={{ position: "relative" }}>
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "240px", objectFit: "cover" }}
                />
                {p.isNew && (
                  <span className="badge bg-success position-absolute top-0 start-0 m-2">
                    New
                  </span>
                )}
                {p.isSale && (
                  <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                    Sale
                  </span>
                )}
              </div>

              <div className="card-body text-center">
                <h5 className="fw-semibold">{p.name}</h5>
                <p className="text-muted mb-2">
                  {p.originalPrice ? (
                    <>
                      <span className="text-decoration-line-through me-2">
                        ${p.originalPrice}
                      </span>
                      <span className="text-primary fw-bold">${p.price}</span>
                    </>
                  ) : (
                    <span className="text-primary fw-bold">${p.price}</span>
                  )}
                </p>

              
                <div className="d-flex justify-content-center gap-2">
                  <Link
                    to={`/product/${p.id}`}
                    state={{ product: p }}
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Details
                  </Link>
                  <button className="btn btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
