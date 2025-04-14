// src/pages/WatchJewelryPage.jsx
import React from 'react';
import './WatchJewelryPage.css';
import ProductCard from '../components/ProductCard';  // Assuming you have ProductCard component

function WatchJewelryPage() {
  return (
    <div className="watch-jewelry-page">
      <header className="page-header">
        <h1>Watches & Jewelry</h1>
        <p>Discover our luxurious collection of watches and jewelry, designed for those with refined taste.</p>
      </header>

      <div className="product-list">
        {/* Example Product Cards */}
        <ProductCard
          image="/assets/watch1.jpg"
          title="Luxury Gold Watch"
          price="$1500"
        />
        <ProductCard
          image="/assets/jewelry1.jpg"
          title="Diamond Ring"
          price="$800"
        />
        <ProductCard
          image="/assets/watch2.jpg"
          title="Silver Watch"
          price="$1200"
        />
      </div>
    </div>
  );
}

export default WatchJewelryPage;
