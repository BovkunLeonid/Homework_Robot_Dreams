import './Product.css';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/productsSlice';

export default function Product(props) {
  const dispatch = useDispatch();

  return (
    props.products.map((product) =>
      <div className='item' key={product.id}>
        <div>{product.title}</div>
        <img src={product.thumbnail} alt={product.title} />
        <div>{product.price} $</div>
        <button type="button" className="btn btn-secondary" onClick={() => dispatch(addProductToCart(product.title))}>Додати в кошик</button>
      </div>
    )
  );
};