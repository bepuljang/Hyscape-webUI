import { Link } from 'react-router-dom';
import signature from '../assets/signature.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={signature} style={{width:200}}/>
        </Link>
        <ul className="nav-menu">
          {/* <li className="nav-item">
            Who We Are
          </li>
          <li className="nav-item">
            What We Do
          </li>
          <li className="nav-item">
            Contact
          </li> */}
          
        </ul>
        {/* <ul style={{display:'flex', gap:10}}>
          <li>
            EN
          </li>
          <span></span>
          <li>KR</li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Navbar;