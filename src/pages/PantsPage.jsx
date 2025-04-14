// src/pages/PantsPage.jsx
import React from 'react';
import './PantsPage.css';
import ProductCard from '../components/ProductCard';

function PantsPage() {
  return (
    <div className="pants-page">
      <header className="page-header">
        <h1>Pants</h1>
        <p>Explore a variety of pants, from formal to casual, to complement your wardrobe.</p>
      </header>

      <div className="product-list">
        {/* Example Product Cards */}
        <ProductCard
          image="/assets/pants1.jpg"
          title="Slim Fit Jeans"
          price="$50"
        />
        <ProductCard
          image="/assets/pants2.jpg"
          title="Chinos"
          price="$45"
        />
        <ProductCard
          image="/assets/pants3.jpg"
          title="Cargo Pants"
          price="$55"
        />
      </div>
    </div>
  );
}

export default PantsPage;
