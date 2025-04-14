import React from 'react';
import './MensPage.css';  // If you still have a custom CSS for this page
import ProductCard from '../components/ProductCard';  // Assuming you have a ProductCard component for displaying products

function MensPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Men's Clothing</h1>
        <p>Explore our latest styles for men.</p>
      </div>

      <div className="product-list">
        {/* Add your product cards here */}
        <ProductCard title="Casual Shirt" description="Comfortable shirt for casual wear" image="path-to-image.jpg" />
        <ProductCard title="Chinos" description="Stylish and comfortable chinos" image="path-to-image.jpg" />
        <ProductCard title="Sneakers" description="Trendy and comfortable sneakers" image="path-to-image.jpg" />
        {/* Add more products as needed */}
      </div>
    </div>
  );
}

export default MensPage;
