import { createBrowserRouter } from "react-router-dom";


import LandingPage from "./LandingPage";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";
import ProductDetail from "./ProductDetail";


import AdminDashboard from "./Admin/AdminDashboard";
import AdminProducts from "./Admin/AdminProducts";
import AdminOrders from "./Admin/AdminOrders";
import AdminUsers from "./Admin/AdminUsers";

const route = createBrowserRouter([
  
  { path: "/", element: <LandingPage /> },
  { path: "/shop", element: <Shop /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <RegistrationForm /> },
  { path: "/product/:id", element: <ProductDetail /> },

  { path: "/admin", element: <AdminDashboard /> },
  { path: "/admin/products", element: <AdminProducts /> },
  { path: "/admin/orders", element: <AdminOrders /> },
  { path: "/admin/users", element: <AdminUsers /> },
]);

export default route;
