// src/components/ProductCard.jsx
import React from 'react'
import './ProductCard.css'

function ProductCard({ image, title, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h3>{title}</h3>
        <p>{price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
