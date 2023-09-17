import logo from '../assets/logo-paretool.png';
import Cart from '../Cart/Cart';
import './header.css';

export default function Header(props) {
  return (
    <div className='header'>
      <div className='cap'>
          <div className='contact'>
            <p>м. Київ</p>
            <p>вул. Полярна, 3</p>
          </div>
          <img className='logo' src={logo} alt='logo-parettool' />
          <div>
            <Cart count={props.count}></Cart>
          </div>
      </div>
    </div>
  );
};