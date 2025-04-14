// src/pages/CoatsPage.jsx
import React from 'react';
import './CoatsPage.css';
import ProductCard from '../components/ProductCard';

function CoatsPage() {
  return (
    <div className="coats-page">
      <header className="page-header">
        <h1>Coats</h1>
        <p>Stay warm and stylish with our collection of premium coats, perfect for any occasion.</p>
      </header>

      <div className="product-list">
        {/* Example Product Cards */}
        <ProductCard
          image="/assets/coat1.jpg"
          title="Winter Parka"
          price="$120"
        />
        <ProductCard
          image="/assets/coat2.jpg"
          title="Wool Overcoat"
          price="$150"
        />
        <ProductCard
          image="/assets/coat3.jpg"
          title="Trench Coat"
          price="$180"
        />
      </div>
    </div>
  );
} 
export default CoatsPage;