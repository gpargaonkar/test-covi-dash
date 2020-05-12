import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <h1>COVI-DASH</h1>
            <Link to="/country">
                <div>See country specific data</div>
            </Link>
        </div>
    )
}

export default Header