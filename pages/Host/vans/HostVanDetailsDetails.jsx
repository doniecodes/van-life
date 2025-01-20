import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVanDetailsDetails = () => {
  const outletContext = useOutletContext();

  return (
    <>
      <div className="host-van-details-text-group">
        <div className="host-van-details-text">
            <p><span>Name:</span> {outletContext.name}</p>
            <p><span>Category:</span> {outletContext.type}</p>
            <p><span>Description:</span> {outletContext.description}</p>
            <p><span>Visibility:</span> Public</p>
        </div>
      </div>
    </>
  )
}

export default HostVanDetailsDetails