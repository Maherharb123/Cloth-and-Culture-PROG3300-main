import React from 'react';
import './WomensPage.css';  // If you still have a custom CSS for this page
import ProductCard from '../components/ProductCard';  // Assuming you have a ProductCard component for displaying products

function WomensPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Women's Clothing</h1>
        <p>Explore our latest styles for women.</p>
      </div>

      <div className="product-list">
        {/* Add your product cards here */}
        <ProductCard title="Casual Dress" description="A comfortable, stylish dress" image="path-to-image.jpg" />
        <ProductCard title="Summer Top" description="Light and breezy for hot days" image="path-to-image.jpg" />
        <ProductCard title="Stylish Jeans" description="Perfect fit for every occasion" image="path-to-image.jpg" />
        {/* Add more products as needed */}
      </div>
    </div>
  );
}

export default WomensPage;
