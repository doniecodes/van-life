import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVanDetailsPricing = () => {
  const outletContext = useOutletContext();

  return (
    <p className='hostVan-details-price'><span>${outletContext.price}</span>/day</p>
  )
}

export default HostVanDetailsPricing