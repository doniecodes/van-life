import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'

const MainOutlet = () => {
  return (
    <>
    <div className="container">
    <header className="header">
        <nav className="navbar">
            <Link to="/" className="logo">#Vanlife</Link>
            <ul>
            <li><NavLink to="/about" className="item">About</NavLink></li>

            <li><NavLink to="/vans" className="item">Vans</NavLink></li>
            </ul>
        </nav>
    </header>
    </div>

        <Outlet />

        <footer>
            <div>&copy; 2022 #Vanlife</div>
        </footer>
    </>
  )
}

export default MainOutlet