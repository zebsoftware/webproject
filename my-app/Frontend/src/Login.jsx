import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./services/authService";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call login API
      const res = await loginUser(emailRef.current.value, passwordRef.current.value);

      // Store token in localStorage
      localStorage.setItem("token", res.token);

      alert(res.message || "Login Successful!");

      // Redirect to dashboard
      navigate("/");

      // Clear input fields
      emailRef.current.value = "";
      passwordRef.current.value = "";
    } catch (error) {
      alert(error.message || "Invalid email or password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-5 bg-white rounded shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#043273ff" }}>
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              ref={passwordRef}
              className="form-control"
              placeholder="Password"
              required
            />
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
            Login
          </button>
        </form>

        <p className="text-center mt-3 mb-0 text-muted">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
