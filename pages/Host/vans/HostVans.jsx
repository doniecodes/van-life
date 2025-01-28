import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '/data/api';
import { requireAuth } from '/data/utils';

export async function loader ({request}){
    await requireAuth(request);
    return getHostVans();
}

const HostVans = () => {
    const vans = useLoaderData();

    const hostVanElements = vans !== null && vans.map((van)=> {
        return (
            <Link to={`${van.id}`} key={van.id} className="host-van">
                <img src={van.imageUrl} alt={van.name} className='host-van-img'/>
                <div>
                <p className="host-van-name">
                {van.name}
                </p>
                <span className="host-van-price">
                    ${van.price}/day
                </span>
            </div>
            </Link>
            )
        })

  return (
    <>
    <div className="host-vans-container">
        <h2 className="heading-2">Your listed vans</h2>
        <div className="host-vans">
            {hostVanElements}
        </div>
    </div>
    </>
  )
}

export default HostVans