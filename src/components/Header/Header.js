import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <h1>COVI-DASH</h1>
            <div className="nav-links">
                <Link to="/" className="link">
                    <div>WORLD</div>
                </Link>
                <Link to="/country" className="link">
                    <div>COUNTRY</div>
                </Link>
            </div>
        </div>
    )
}

export default Header