import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-5 bg-white rounded shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#043273ff" }}>
          Login
        </h2>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email Address" required />
          </div>
          <div className="mb-4">
            <input type="password" className="form-control" placeholder="Password" required />
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
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
