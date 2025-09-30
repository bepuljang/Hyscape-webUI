import React from 'react';
import logo from "../assets/signature_gray.png"
import './Footer.css';

const addr = [
    "A-813, 8F, Seongnam Central Biz Tower 2 99 Sagimakgol-ro, Jungwon-gu",
    "Seongnam-si, Gyeonggi-do, Republic of Korea"
]

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={logo} style={{maxWidth:200}}/>
                <div>
                    <h3>Address.</h3>
                    {addr.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div>
                    <div>
                        <h3>Phone</h3>
                        <p>+82-31-789-6766</p>
                    </div>
                    
                </div>
                <div>
                    <h3>Email</h3>
                    <p>contact@hyscape.co.kr</p>
                </div>
            </div>            
        </footer>
    );
}

export default Footer;