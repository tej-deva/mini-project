// Checkout.js

import React from 'react';
import './Checkout.css'; // Checkout component CSS file

function Checkout() {
  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form">
        <label>Name:</label>
        <input type="text" className="checkout-input" />
        <label>Email:</label>
        <input type="email" className="checkout-input" />
        <label>Address:</label>
        <textarea className="checkout-input"></textarea>
        <button className="place-order-btn">Place Order</button>
      </form>
    </section>
  );
}

export default Checkout;
