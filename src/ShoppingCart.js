// ShoppingCart.js

import React from 'react';
import './ShoppingCart.css'; // ShoppingCart component CSS file

function ShoppingCart() {
  // Example hardcoded cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
  ];

  return (
    <section className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <div>{item.name}</div>
            <div>${item.price} x {item.quantity}</div>
          </li>
        ))}
      </ul>
      <button className="checkout-btn">Checkout</button>
    </section>
  );
}

export default ShoppingCart;