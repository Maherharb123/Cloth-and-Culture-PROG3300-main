// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Corrected import
import './Navbar.css';  // This should be at the top of your Navbar.jsx


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        {/* Logo wrapped with Link for navigation */}
        <li>
          <Link to="/" className="logo">
            <img src={logo} alt="Cloth and Culture Logo" className="navbar-logo" />
          </Link>
        </li>
        
        {/* Other navigation items */}
        <li><Link to="/mens">Men's Clothing</Link></li>
        <li><Link to="/womens">Women's Clothing</Link></li>
        <li><Link to="/shoes">Shoes</Link></li>
        <li><Link to="/accessories">Accessories</Link></li>
        <li><Link to="/watches-jewelry">Luxury (Watches & Jewelry)</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
