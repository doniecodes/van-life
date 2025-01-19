import { useState } from 'react'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route, Routes} from 'react-router-dom'

import Home from '../pages/Home';
import Vans from '../pages/Vans';
import About from '../pages/About';
import MainOutlet from '../pages/MainOutlet';

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<MainOutlet />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Route>
      
      </>
  )
)

function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
