import React, { useRef } from "react";

function Login() {
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Login Data:", { email, password });
    emailRef.current.value = "";
    passwordRef.current.value = "";
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
              className="form-control"
              placeholder="Email Address"
              required
              ref={emailRef} 
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
              ref={passwordRef} 
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
          Don’t have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
