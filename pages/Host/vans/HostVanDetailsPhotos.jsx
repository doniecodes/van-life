import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanDetailsPhotos = () => {
  const outletContext = useOutletContext();

  return (
    <>
      <img src={outletContext.imageUrl} alt={outletContext.name} width={100}/>
    </>
  )
}

export default HostVanDetailsPhotos