import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
    <div className="not-found-container">
    <h1 className='not-found-text'>
        Sorry, the page you were looking for was not found.
    </h1>
    <Link to="/" className='not-found-btn'>Return to home</Link>
    </div>
    </>
  )
}

export default NotFoundPage