import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <>
    <div className="bg-dark text-white p-3 vh-100">
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/orders">Orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/users">Users</Link>
        </li>
      </ul>
    </div>
    </>
  );
}
