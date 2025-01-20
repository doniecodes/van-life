import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HostVans = () => {
    const [vans, setVans] = useState(null);

    useEffect(()=> {
        fetch(`/api/host/vans`)
        .then(res=> res.json())
        .then((data)=> {
            setVans(data.vans)
        })
    }, [])

    const hostVanElements = vans !== null && vans.map((van)=> {
        return (
            <Link to={`/host/vans/${van.id}`} key={van.id} className="host-van">
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