import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { RouterProvider } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import route from './Path.jsx';
import Header from './Header.jsx';

// Load Stripe publishable key
const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXX");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <RouterProvider router={route} />
    </Elements>
  </React.StrictMode>
);
