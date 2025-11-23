import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "./services/authService";

function RegistrationForm() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!terms) {
      alert("You must agree to the Terms & Conditions");
      return;
    }

    try {
      const res = await registerUser({ name, email, phone, password, newsletter });
      alert(res.message);
      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setTerms(false);
      setNewsletter(false);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-5 bg-white rounded shadow-lg" style={{ width: "420px", borderRadius: "18px" }}>
        <h2 className="text-center fw-bold mb-1" style={{ color: "#043273ff" }}>ZStore</h2>
        <p className="text-center text-muted mb-4">Create Account</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-check mb-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
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
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            <label className="form-check-label small" htmlFor="newsletter">
              Subscribe to our Newsletter
            </label>
          </div>

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
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationForm;
