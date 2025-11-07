import React from "react";
import { useLocation } from "react-router-dom";

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="container mt-5">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>

          {product.originalPrice ? (
            <h4 className="mb-3">
              <span className="text-muted text-decoration-line-through me-2">
                ${product.originalPrice}
              </span>
              <span className="text-primary fw-bold">${product.price}</span>
            </h4>
          ) : (
            <h4 className="text-primary mb-3 fw-bold">${product.price}</h4>
          )}

          <p className="text-muted mb-4">{product.description}</p>

          <div className="border-top pt-3">
            <h6 className="fw-semibold mb-2">Why You’ll Love It:</h6>
            <ul className="list-unstyled">
              <li>Premium quality & trusted brand</li>
              <li>1-year official warranty</li>
              <li>Free shipping across Pakistan</li>
              <li>7-day return & exchange policy</li>
              <li>Secure online payment</li>
            </ul>
          </div>

          
          <div className="mt-4">
            <button className="btn btn-primary me-3">
              Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
