import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import ProductDetail from "./ProductDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
