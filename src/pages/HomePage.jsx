// src/pages/HomePage.jsx
import React from 'react';
import jordanOneDior from '../assets/jordanOneDior.jpg';  // Imported image
import ProductCard from '../components/ProductCard';
import './HomePage.css';  // You can still use page-specific styles here if needed

function HomePage() {
  return (
    <div className="homepage">
      <header className="hero-image">
        <img src={jordanOneDior} alt="Hero" />
      </header>
      <div className="intro-text">
        <h2>Welcome to Cloth and Culture</h2>
        <p>Explore our amazing collection of clothing, shoes, and accessories.</p>
      </div>

      <div className="product-list">
        <ProductCard
          image={jordanOneDior}
          title="Jordan One Dior"
          price="$250"
        />
        {/* Add more ProductCard components if needed */}
      </div>
    </div>
  );
}

export default HomePage;
