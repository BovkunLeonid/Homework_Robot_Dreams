import { useContext } from 'react';
import basket from '../assets/basket.png';
import './Cart.css';
import { NotificationContext } from '../App';

const Cart = () => {
  const [productsInCart, setProductsInCart] = useContext(NotificationContext);
  return (
    <div className='cart'>
        <img className='basket' src={basket} alt='img-basket' />
        <span className='counter'>{setProductsInCart.length}</span>
    </div>
  );
};

export default Cart;