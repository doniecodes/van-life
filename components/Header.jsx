import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import imageUrl from "/images/avatar-icon.png"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  const linkStyle = ({isActive}) => {
    return {
      fontWeight : isActive && '500',
      textDecoration : isActive && "underline"
    }
  }
  
  const handleLogOut = ()=> {
    localStorage.removeItem("loggedIn");
  }

  return (
    <>
    <div className="container">
    <header className="header">
        <nav className="navbar">
            <Link to="/" className="logo">#Vanlife</Link>

            <ul>
            <li><NavLink to="/host" className="item" style={linkStyle} end >Host</NavLink></li>

            <li><NavLink to="/about" className="item" style={linkStyle}>About</NavLink></li>

            <li><NavLink to="/vans" className="item" style={linkStyle}>Vans</NavLink></li>
            <li><Link to="login" className="login-link">
                    <img 
                        src={imageUrl} 
                        className="login-icon"
                    />
                </Link></li>
            <li><button onClick={handleLogOut} className="item">Log Out</button></li>
            </ul>
        </nav>
    </header>
    </div>
    </>
  )
}

export default Header