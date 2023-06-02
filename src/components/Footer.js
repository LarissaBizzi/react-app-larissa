import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

export default function Footer() {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <img src={Logo} alt="Little Lemon logo" />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                    <div className="footer-content">
                        <div className="locations">
                            <h5>LOCATIONS</h5>
                            <ul>
                                <li>Montreal</li>
                                <li>Chicago</li>
                                <li>New York</li>
                                <li>Sao Paulo</li>
                            </ul>
                        </div>
                        <div className="opening-times">
                            <h5>OPENING TIMES</h5>
                            <ul>
                                <li>Mon - Wed: 10:30AM - 12:00AM</li>
                                <li>Fri: 12:00PM - 1:00AM</li>
                                <li>Sat - Sun: 10:30AM - 12:00AM</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h5>CONTACT US</h5>
                            <ul>
                                <li>123, Road Road</li>
                                <li>Tel: 544 5444 5444</li>
                                <li>Email: info@littlelemon.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2023 Little Lemon Ltd | By Larissa Bizzi</p>
                    </div>
                </div>
            </div>
        </div>
    );
}