import React, {useState} from "react";
import './Product.css';
import { useContext } from "react";
import { NotificationContext } from "../App";

export default function Product(props) {
  const [products, setProducts] = useContext(NotificationContext);
  return (
    products.map((product) =>
      <div className='item'>
        <div>{product.title}</div>
        <img src={product.thumbnail} alt={product.title} />
        <div>{product.price} $</div>
        <button type="button" className="btn btn-secondary" onClick={() => {props.addProductToCart(product.title)}}>Додати в кошик</button>
      </div>
    )
  );
};