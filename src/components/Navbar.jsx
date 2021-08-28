import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2 className="navbar__title">Page Test</h2>
            <div className="navbar__nav">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>product</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
