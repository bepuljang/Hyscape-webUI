import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import signature from '../assets/signature.png';
import './Navbar.css';

function Navbar() {
  const [language, setLanguage] = useState('ENG');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <span to="/" className="nav-logo" onClick={() => scrollToSection('mission')}>
          <img src={signature} style={{width:140}}/>
        </span>
        <ul className="nav-menu">
          <li className="nav-item" onClick={() => scrollToSection('staff')}>
            Staff
          </li>
          <li className="nav-item" onClick={() => scrollToSection('product')}>
            Product
          </li>
          <li className="nav-item" onClick={() => scrollToSection('technology')}>
            Technology
          </li>
          <li className="nav-item" onClick={() => scrollToSection('history')}>
            History
          </li>
          <li className="nav-item" onClick={() => scrollToSection('investor')}>
            Partners
          </li>
          <li className="nav-item" onClick={() => scrollToSection('contact')}>
            Contact
          </li>
        </ul>
        <div className="language-switcher">
          {/* <span
            className={language === 'ENG' ? 'lang-active' : 'lang-inactive'}
            onClick={() => setLanguage('ENG')}
          >
            ENG
          </span>
          <span className="lang-divider">|</span>
          <span
            className={language === '한국어' ? 'lang-active' : 'lang-inactive'}
            onClick={() => setLanguage('한국어')}
          >
            한국어
          </span> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;