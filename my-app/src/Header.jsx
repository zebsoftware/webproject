import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-primary border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">ShopX</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="bi bi-list text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex align-items-center">
            <i className="bi bi-search me-3 text-white"></i>
            <i className="bi bi-heart me-3 text-white"></i>
            <i className="bi bi-cart3 me-3 text-white"></i>

          
            <div className="dropdown">
              <i
                className="bi bi-person text-white dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              ></i>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/register">Register</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
