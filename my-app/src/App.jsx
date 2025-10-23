import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import ProductDetail from "./ProductDetail";

function App()
{
  return(
    <LandingPage />
  );
}
export default App;