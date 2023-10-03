import { Link } from 'react-router-dom';
import logo from '../assets/logo-paretool.png';
import Cart from '../Cart/Cart';
import './Header.css';
import { useSelector } from 'react-redux';

export default function Header() {
  // const count = useSelector((state) => state.counter.value)
  return (
    <div className='header'>
      <div className='cap'>
        <div className='contact'>
          <p>м. Київ</p>
          <p>вул. Полярна, 3</p>
        </div>
        <img className='logo' src={logo} alt='logo-parettool' />
        <div>
          <Cart></Cart>
        </div>
      </div>
      <div className='header-menu'>
        <span className='menu-page'>
          <Link to='/Products'>Products</Link>
        </span>
        <span className='menu-page'>
          <Link to='/CreateProduct'>CreateProducts</Link>
        </span>
      </div>
    </div>
  );
};