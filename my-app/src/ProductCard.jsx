import React from "react";

 function ProductCard({ product }) {
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;

  return (
    <div className="card h-100 border-0 shadow-sm product-card" style={{ transition: "all 0.3s ease" }}>
      <div className="position-relative overflow-hidden">
        <div style={{ aspectRatio: "1/1" }}>
          <img src={product.image} alt={product.name} className="w-100 h-100" style={{ objectFit: "cover" }} />
        </div>
        <div className="position-absolute top-0 start-0 p-3 d-flex flex-column" style={{ gap: "0.5rem" }}>
          {product.isNew && <span className="badge bg-dark">New</span>}
          {product.isSale && discount > 0 && <span className="badge bg-danger">{discount}% OFF</span>}
        </div>
        <button className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle p-2" style={{ opacity: 0, width: "40px", height: "40px" }}>
          <i className="bi bi-heart"></i>
        </button>
      
      </div>
      <div className="card-body p-3">
        <h6 className="text-dark mb-2" style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {product.name}
        </h6>
        <div className="d-flex align-items-center" style={{ gap: "0.5rem" }}>
          <span className="h6 text-dark mb-0">${product.price}</span>
          {product.originalPrice && <small className="text-muted text-decoration-line-through">${product.originalPrice}</small>}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
