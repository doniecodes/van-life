import React from 'react'
import { Outlet } from 'react-router'
import { redirect } from 'react-router-dom';

const AuthRequired = () => {
  const isLoggedIn = false;
    
  return (
    <>
    { !isLoggedIn ? redirect("/login")
    : <Outlet /> }
    </>
  )
}

export default AuthRequired
