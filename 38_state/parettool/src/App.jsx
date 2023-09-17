import React, { useState } from 'react';
import Header from './Header/Header';
import Products from './products/Products';
import './App.css';
import { productsAll } from './data';

const App = () => {
  const [products, setProducts] = useState(productsAll);
  const [productsInCart, setProductsInCart] = useState([]);

  const addProductToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
    console.log(productsInCart); 
  };

  return (
    <>
      <Header count={productsInCart.length}></Header>
      <Products products={products} addProductToCart={addProductToCart}></Products>
    </>
  );
};

export default App