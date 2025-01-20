import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const linkStyle = ({isActive}) => {
    return {
      fontWeight : isActive ? '500' : '400',
    }
  }
  
  return (
    <>
    <div className="container">
    <header className="header">
        <nav className="navbar">
            <Link to="/" className="logo">#Vanlife</Link>

            <ul>
            <li><NavLink to="/host" className="item" style={linkStyle}>Host</NavLink></li>

            <li><NavLink to="/about" className="item" style={linkStyle}>About</NavLink></li>

            <li><NavLink to="/vans" className="item" style={linkStyle}>Vans</NavLink></li>
            </ul>
        </nav>
    </header>
    </div>
    </>
  )
}

export default Header