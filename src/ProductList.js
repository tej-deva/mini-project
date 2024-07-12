// ProductList.js

import React from 'react';
import './ProductList.css'; // ProductList component CSS file

function ProductList() {
  // Example hardcoded product data
  const products = [
    { id: 1, name: 'Iphone', price: 19.99 },
    { id: 2, name: 'Watch', price: 29.99 },
    { id: 3, name: 'shoes', price: 39.99 },
  ];

  return (
    <section className="product-list">
      <h2>Products</h2>
      <ul className="product-items">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div>{product.name}</div>
            <div>${product.price}</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;