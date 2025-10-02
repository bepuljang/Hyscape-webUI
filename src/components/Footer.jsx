import React from 'react';
import logo from "../assets/signature_gray.png"
import './Footer.css';

const addr = [
    "A-813, 8F, Seongnam Central Biz Tower 2 99 Sagimakgol-ro, Jungwon-gu",
    "Seongnam-si, Gyeonggi-do, Republic of Korea"
]

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} style={{maxWidth:200}}/>
                </div>
                <div className="footer-navigation">
                    <h3>Navigation</h3>
                    <ul className="footer-nav-list">
                        <li onClick={() => scrollToSection('mission')}>Mission</li>
                        <li onClick={() => scrollToSection('staff')}>Staff</li>
                        <li onClick={() => scrollToSection('technology')}>Technology</li>
                        <li onClick={() => scrollToSection('history')}>History</li>
                        <li onClick={() => scrollToSection('investor')}>Investor</li>
                        <li onClick={() => scrollToSection('contact')}>Contact</li>
                    </ul>
                </div>
                <div className="footer-address">
                    <h3>Address</h3>
                    {addr.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div className="footer-contact">
                    <h3>Contact Info</h3>
                    <div>
                        <p><strong>Phone:</strong> +82-31-789-6766</p>
                        <p><strong>Email:</strong> contact@hyscape.co.kr</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 Hyscape. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;