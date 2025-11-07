import React from "react";

export default function About() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="fw-bold text-primary mb-3">About <span className="text-dark">ShopX</span></h1>
          <p className="lead text-muted">
            Welcome to <strong>ShopX</strong> — your one-stop destination for fashion, electronics, and home essentials. 
            We combine quality, style, and convenience to deliver a seamless online shopping experience across all devices.
          </p>
          <p>
            From the latest trends in fashion to cutting-edge technology, ShopX is built for everyone 
            who values comfort, reliability, and affordability — all in one place.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1080"
            alt="About ShopX"
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="row text-center py-5 bg-light rounded-4 shadow-sm">
        <div className="col-md-4 mb-4 mb-md-0">
          <i className="bi bi-box-seam text-primary display-5 mb-3"></i>
          <h4 className="fw-semibold">Quality Products</h4>
          <p className="text-muted">
            Every item is handpicked for durability, design, and authenticity to ensure you get only the best.
          </p>
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <i className="bi bi-truck text-primary display-5 mb-3"></i>
          <h4 className="fw-semibold">Fast Delivery</h4>
          <p className="text-muted">
            We deliver your orders safely and quickly — because your time and trust matter most.
          </p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-emoji-smile text-primary display-5 mb-3"></i>
          <h4 className="fw-semibold">Customer Satisfaction</h4>
          <p className="text-muted">
            Our goal is to make your shopping experience smooth and joyful with dedicated customer support.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mt-5">
        <h2 className="fw-bold mb-4">Meet Our Team</h2>
        <p className="text-muted mb-5">
          Behind ShopX is a passionate team dedicated to bringing innovation, trust, and excellence to online shopping.
        </p>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 shadow"
            />
            <h6 className="fw-semibold">Alex Carter</h6>
            <p className="text-muted small">Founder & CEO</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 shadow"
            />
            <h6 className="fw-semibold">Sophia Lee</h6>
            <p className="text-muted small">Marketing Head</p>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3 shadow"
            />
            <h6 className="fw-semibold">Dean Smith</h6>
            <p className="text-muted small">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}
