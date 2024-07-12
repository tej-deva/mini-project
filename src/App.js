
// App.js

import React from 'react';
import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <ProductList />
        <ShoppingCart />
        <Checkout />
      </main>
    </div>
  );
}

export default App;
