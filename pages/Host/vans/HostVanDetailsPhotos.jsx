import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanDetailsPhotos = () => {
  const outletContext = useOutletContext();

  return (
    <>
      <img src={outletContext.imageUrl} alt={outletContext.name} width={150}/>
    </>
  )
}

export default HostVanDetailsPhotos