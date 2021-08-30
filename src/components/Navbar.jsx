import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar__title">Page Test</h2>
            <ul className="navbar__nav">
                <li>
                    <b>home</b>
                </li>
                <li>
                    <b>about</b>
                </li>
                <li>
                    <b>product</b>
                </li>
                <li>
                    <b>contact</b>
                </li>
            </ul>
        </div>
    );
}

export default Navbar
