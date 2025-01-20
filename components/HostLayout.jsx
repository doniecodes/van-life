import React from 'react'
import { Outlet } from 'react-router'
import {Link, NavLink} from 'react-router-dom'

const HostLayout = () => {
  const linkStyle = ({isActive}) => {
    return {
      fontWeight : isActive ? '500' : '400',
    }
  }
    
  return (
    <>
    <ul className="host-links">
        <li><NavLink style={linkStyle} end to="/host" className="link">Dashboard</NavLink></li>

        <li><NavLink style={linkStyle} to="/host/income" className="link">Income</NavLink></li>

        <li><NavLink style={linkStyle} to="/host/vans" className="link">Vans</NavLink></li>
        
        <li><NavLink style={linkStyle} to="/host/reviews" className="link">Reviews</NavLink></li>
    </ul>

    <Outlet />
    </>
  )
}

export default HostLayout