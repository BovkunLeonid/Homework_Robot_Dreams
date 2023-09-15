import logo from '../assets/logo-parettool.png';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="cap">
          <div>
              <p>м. Київ</p>
              <p>вул. Полярна, 3</p>
          </div>
          <img className='logo' src={logo} alt="logo-parettool" />
          <div>
              <p>063-344-17-36</p>
              <p>099-159-79-57</p>
          </div>
      </div>
    </div>
  )
}