// src/pages/ShirtsPage.jsx
import React from 'react';
import './ShirtsPage.css';
import ProductCard from '../components/ProductCard';

function ShirtsPage() {
  return (
    <div className="shirts-page">
      <header className="page-header">
        <h1>Shirts</h1>
        <p>Our shirts are crafted for style and comfort. Find your perfect fit in our collection.</p>
      </header>

      <div className="product-list">
        {/* Example Product Cards */}
        <ProductCard
          image="/assets/shirt1.jpg"
          title="Casual Button-Up Shirt"
          price="$40"
        />
        <ProductCard
          image="/assets/shirt2.jpg"
          title="Formal Dress Shirt"
          price="$60"
        />
        <ProductCard
          image="/assets/shirt3.jpg"
          title="Flannel Shirt"
          price="$45"
        />
      </div>
    </div>
  );
}

export default ShirtsPage;
