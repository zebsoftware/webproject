import React from "react";
 function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-primary  border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-white" >ZStore</a>
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
            <li className="nav-item"><a className="nav-link text-white active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Shop</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li>
          </ul>
          <div className="d-flex align-items-center">
            <i className="bi bi-search me-3 text-white"></i>
            <i className="bi bi-heart me-3 text-white"></i>
            <i className="bi bi-cart3 me-3 text-white"></i>
            <i className="bi bi-person text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
