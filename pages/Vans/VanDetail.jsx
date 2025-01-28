import React from 'react'
import { useLocation, useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import {getVans} from '/data/api'


export function loader ({params}){
    return getVans(params.id);
}

const VanDetail = () => {
    const location = useLocation();
    const van = useLoaderData();

    const search = location.state ? location.state.search : "";
    const btnText = search.split('=')[1]

  return (
    <>
    <div className="van-detail-container">

    <Link to={`..?${search}`}
      relative="path"
       className="back-to-vans-link">
        &#8592;<span>{search ? `Back to ${btnText} Vans` : "Back to all Vans"}</span>
      </Link>

        <div className="van-detail">
            <img src={van.imageUrl} />
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            <h2>{van.name}</h2>
            <p className="van-price"><span>${van.price}</span>/day</p>
            <p>{van.description}</p>
            <button className="link-button">Rent this van</button>
        </div>
      </div>
    </>
  )
}

export default VanDetail