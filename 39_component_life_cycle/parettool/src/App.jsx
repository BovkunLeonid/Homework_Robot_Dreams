import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Products from './products/Products';
import './App.css';

const App = () => {
  let productsAll = [];
  const [products, setProducts] = useState(productsAll);
  const [productsInCart, setProductsInCart] = useState([]);

  const addProductToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
    console.log(productsInCart); 
  };

  const apiGet = () => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
    productsAll = data.products;
    setProducts(productsAll);
    });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Header count={productsInCart.length}></Header>
      <Products products={products} addProductToCart={addProductToCart}></Products>
    </>
  );
};

export default App