// Header.js

import React from 'react';
import './Header.css'; // Header component CSS file

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">Products</li>
          <li className="nav-item">Cart</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

