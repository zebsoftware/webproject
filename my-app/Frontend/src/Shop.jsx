import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "./services/productService";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // ✅ call service instead of Axios directly
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products in component:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Explore Our Collection</h2>
      {products.length === 0 ? (
        <p className="text-center text-muted">No products available.</p>
      ) : (
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
      )}
    </div>
  );
}
