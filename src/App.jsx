import { useState } from 'react'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from 'react-router-dom'
import "../data/server"
import Home from '../pages/Home';
import Vans, { loader as vansLoader } from '../pages/Vans/Vans';
import About from '../pages/About';
import MainOutlet from '../components/MainOutlet';
import VanDetail, { loader as vanDetailLoader } from '../pages/Vans/VanDetail';
import HostLayout from '../components/HostLayout';
import Dashboard, { loader as dashLoader } from '../pages/Host/dashboard/Dashboard';
import Income from '../pages/Host/income/Income';
import Reviews from '../pages/Host/reviews/Reviews';
import HostVans, {loader as hostVansLoader} from '../pages/Host/vans/HostVans';
import HostVanDetailLayout, { loader as hostVansDetailLoader } from '../pages/Host/vans/HostVanDetailLayout';
import HostVanDetailsDetails from '../pages/Host/vans/HostVanDetailsDetails';
import HostVanDetailsPricing from '../pages/Host/vans/HostVanDetailsPricing';
import HostVanDetailsPhotos from '../pages/Host/vans/HostVanDetailsPhotos';
import NotFoundPage from '../pages/NotFoundPage';
import ErrorLoader from '../pages/ErrorLoader';
import Login, { loader as loginLoader,
  action as loginAction } from '../pages/Login';
import { requireAuth } from '../data/utils';

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<MainOutlet />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorLoader />}/>
        <Route path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<ErrorLoader/>} />

        <Route path="host" element={<HostLayout />}
        loader={async ({request})=> await requireAuth(request)}>
          <Route index element={<Dashboard />}
          loader={dashLoader} />
          <Route path="income" element={<Income />}
          loader={async ({request})=> await requireAuth(request)} />
          <Route path="vans"
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<ErrorLoader/>} />
          <Route path="vans/:id"
          element={<HostVanDetailLayout/>}
          loader={hostVansDetailLoader}
          errorElement={<ErrorLoader/>} > 
            <Route index
            element={<HostVanDetailsDetails />}
            loader={async ({request})=> await requireAuth(request)} />
            <Route path="pricing"
            element={<HostVanDetailsPricing />}
            loader={async ({request})=> await requireAuth(request)} />
            <Route path="photos" element={<HostVanDetailsPhotos />}
            loader={async ({request})=> await requireAuth(request)} />
          </Route>
          <Route path="reviews" element={<Reviews />}
          loader={async ({request})=> await requireAuth(request)} />
        </Route>

        <Route path="login" element={<Login />}
        loader={loginLoader}
        action={loginAction} />
        <Route path="*" element={<NotFoundPage />} />
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