import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { RouterProvider } from 'react-router-dom';
import route from './Path.jsx'; 
import Header from './Header.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    
    <RouterProvider router={route}/>
  </React.StrictMode>
);
