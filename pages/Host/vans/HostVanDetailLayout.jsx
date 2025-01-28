import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData} from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom';
import { getHostVans } from '/data/api';
import { requireAuth } from '/data/utils';

export async function loader({params, request}){
  await requireAuth(request);
  return getHostVans(params.id)
}

const HostVanDetailLayout = () => {
  const van = useLoaderData();

    const linkStyle = ({isActive})=> {
      return isActive ? {
        fontWeight : '500',
        textDecoration : 'underline'
      } : null
    }

  return (
    <>
    <div className="host-van-details-section">
      <Link to=".."
      relative="path"
       className="back-to-vans-link">
        &#8592;<span>Back to all Vans</span>
      </Link>

      <div className="host-van-details-wrapper">
        <div className="host-van-details-showcase-content">
          <div>
            <img src={van.imageUrl} alt="" className="host-van-details-img" />
            <div>
              <p className="host-van-type">{van.type}</p>
              <h3 className="host-van-details-name">{van.name}</h3>
              <p className="host-van-details-price"><span>${van.price}</span>/day</p>
            </div>
          </div>

          {/* Van Details Links */}
          <nav className="host-van-details-links">
            <NavLink style={linkStyle} end to='.'
            className='host-van-details-link'>Details</NavLink>

            <NavLink style={linkStyle} to={`/host/vans/${van.id}/pricing`} className='host-van-details-link'>Pricing</NavLink>

            <NavLink style={linkStyle} to={`/host/vans/${van.id}/photos`} className='host-van-details-link'>Photos</NavLink>
          </nav>
      </div>

      <Outlet context={van}/>
    </div>
    
    </div>
    </>
  )
}

export default HostVanDetailLayout