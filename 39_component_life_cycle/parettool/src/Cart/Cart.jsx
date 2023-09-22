import basket from '../assets/basket.png';
import './Cart.css';

const Cart = (props) => {
  return (
    <div className='cart'>
        <img className='basket' src={basket} alt="img-basket" />
        <span className='counter'>{props.count}</span>
    </div>
  );
};

export default Cart;