// src/pages/AccessoriesPage.jsx
import React from 'react';
import './AccessoriesPage.css';
import ProductCard from '../components/ProductCard';

function AccessoriesPage() {
  return (
    <div className="accessories-page">
      <header className="page-header">
        <h1>Accessories</h1>
        <p>Enhance your look with our exclusive collection of accessories, from belts to hats.</p>
      </header>

      <div className="product-list">
        {/* Example Product Cards */}
        <ProductCard
          image="/assets/belt1.jpg"
          title="Leather Belt"
          price="$25"
        />
        <ProductCard
          image="/assets/hat1.jpg"
          title="Wool Beanie"
          price="$20"
        />
        <ProductCard
          image="/assets/scarf1.jpg"
          title="Cashmere Scarf"
          price="$45"
        />
      </div>
    </div>
  );
}

export default AccessoriesPage;
