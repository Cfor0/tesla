import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <ul>
                <li>
                    <a href="#" className="fa fa-facebook"></a>
                </li>
                <li>
                    <a href="#" className="fa fa-twitter"></a>
                </li>
                <li>
                    <a href="#" className="fa fa-instagram"></a>
                </li>
                <li>
                    <a href="#" className="fa fa-youtube"></a>
                </li>
                <li>
                    <a href="#" className='footer-contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;