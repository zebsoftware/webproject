import React from "react";

export default function RegistrationForm() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #cb5f11ff 0%, #2575fc 100%)",
      }}
    >
      <div
        className="p-5 bg-white rounded shadow-lg"
        style={{ width: "420px", borderRadius: "18px" }}
      >
        {/* Logo */}
        <h2 className="text-center fw-bold mb-1" style={{ color: "#2575fc" }}>
          ZStore
        </h2>
        <p className="text-center text-muted mb-4">Create Account</p>

        {/* Form */}
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Checkboxes */}
          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label className="form-check-label small" htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="newsletter"
            />
            <label className="form-check-label small" htmlFor="newsletter">
              Subscribe to our Newsletter
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn w-100 text-white"
            style={{
              background: "linear-gradient(90deg, #2575fc, #6a11cb)",
              fontWeight: "600",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Register
          </button>
        </form>

        <p className="text-center mt-3 mb-0 text-muted">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
}
