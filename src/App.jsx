import { useState } from 'react'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route, Routes} from 'react-router-dom'
import "/server"

import Home from '../pages/Home';
import Vans from '../pages/Vans/Vans';
import About from '../pages/About';
import MainOutlet from '../components/MainOutlet';
import VanDetail from '../pages/Vans/VanDetail';
import HostLayout from '../components/HostLayout';
import Dashboard from '../pages/Host/dashboard/Dashboard';
import Income from '../pages/Host/income/Income';
import Reviews from '../pages/Host/reviews/Reviews';
import HostVans from '../pages/Host/vans/HostVans';
import HostVanDetailLayout from '../pages/Host/vans/HostVanDetailLayout';
import HostVanDetailsDetails from '../pages/Host/vans/HostVanDetailsDetails';
import HostVanDetailsPricing from '../pages/Host/vans/HostVanDetailsPricing';
import HostVanDetailsPhotos from '../pages/Host/vans/HostVanDetailsPhotos';

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<MainOutlet />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetailLayout />} >
            <Route index element={<HostVanDetailsDetails />} />
            <Route path="pricing" element={<HostVanDetailsPricing />} />
            <Route path="photos" element={<HostVanDetailsPhotos />} />
          </Route>

          <Route path="reviews" element={<Reviews />} />
        </Route>

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
