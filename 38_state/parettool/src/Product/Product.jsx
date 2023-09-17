import React, {useState} from "react";
import './product.css';

export default function Product(props) {

  return (
    props.products.map((product) =>
      <div className='item'>
        <div>{product.name}</div>
        <img src={product.url} alt={product.alt} />
        <div>{product.price} $</div>
        <button type="button" className="btn btn-secondary" onClick={() => {props.addProductToCart(product.name)}}>Додати в кошик</button>
      </div>
    )
  );
};