import React from 'react'
import { Link, useLoaderData, Await } from 'react-router-dom'
import { getHostVans } from '/data/api';
import { requireAuth } from '/data/utils';

export async function loader ({request}){
    await requireAuth(request);

    const hostVansPromise = new Promise((res)=> {
        setTimeout(() => res(getHostVans()), 0)
    })
    return { hostVansPromise };
}

const HostVans = () => {
    const { hostVansPromise } = useLoaderData()

    const hostVansAwaitElements = (vans)=> {
        const hostVanElements = vans !== null && vans.map((van)=> {
            return (
                <Link to={`${van.id}`} key={van.id} className="host-van">
                    <img src={van.imageUrl} alt={van.name} className='host-van-img'/>
                    <div>
                    <p className="host-van-name">
                    {van.name}
                    </p>
                    <span className="host-van-price">
                        ${van.price}/day
                    </span>
                </div>
                </Link>
                )
            })

            return (
                <>
                <div className="host-vans">
                    {hostVanElements}
                </div>
                </>
            )
    }

  return (
    <>
    <div className="host-vans-container">
    <h2 className="heading-2">Your listed vans</h2>
     <React.Suspense fallback={<h2>Loading Vans...</h2>}>
        <Await resolve={hostVansPromise}>
            {hostVansAwaitElements}
        </Await>
     </React.Suspense>
     </div>
    </>
  )
}

export default HostVans