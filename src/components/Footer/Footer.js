import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
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
                    <Link to="/contact" className="footer-contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;
