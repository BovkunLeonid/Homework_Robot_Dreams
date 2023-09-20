import Product from '../Product/Product';
import './products.css';

export default function Products(props) {

  return (
    <div className="products">
      <Product addProductToCart={props.addProductToCart} products={props.products}></Product>
    </div>
  );
};