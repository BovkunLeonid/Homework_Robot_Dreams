import { useContext } from 'react';
import basket from '../assets/basket.png';
import './Cart.css';
import { NotificationContext } from '../App';
import { useSelector } from 'react-redux';
import counter from '../redux/counter';

const Cart = () => {
  const [productsInCart, setProductsInCart] = useContext(NotificationContext);
  // const count = useSelector((state) => state.counter.value);
  return (
    <div className='cart'>
        <img className='basket' src={basket} alt="img-basket" />
        <span className='counter'>{setProductsInCart.length}</span>
        {/* <div className='counter'>{count}</div> */}
    </div>
  );
};

export default Cart;