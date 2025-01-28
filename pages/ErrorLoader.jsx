import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorLoader = () => {
    const error = useRouteError();
    
  return (
    <>
        <div className="error-vans">
        <h2>Error : {error.message}. </h2>
        <p>{error.status}, {error.statusText} </p>
        </div>
    </>
  )
}

export default ErrorLoader