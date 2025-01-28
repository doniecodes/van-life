import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import {getVans} from '/data/api'
import { useLoaderData } from 'react-router-dom';

/* Loader Function */
export function loader (){
  return getVans();
}

const Vans = () => {
  const vans = useLoaderData();

    /* Search Params */
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const handleFilterChange = (key, value)=> {
      setSearchParams(prevParams=> {
        if(value=== null){
          prevParams.delete(key);
        } else {
          prevParams.set(key, value);
        }
        return prevParams;
      })
    }

    const displayedVans = typeFilter ?
    vans.filter(van=> van.type.toLowerCase() === typeFilter)
    : vans;

    const vanElements = displayedVans.map(van => (
        <Link to={`${van.id}`} key={van.id}
        state={{search: searchParams.toString()}}>
        <div className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
        </Link>
    ))

  return (
    <>
    <section className='vans-section'>
      <h2 className="heading-2">
        Explore our van options
      </h2>

      <div className='vans-filters'>
        <button onClick={()=> handleFilterChange('type','simple')}
         className={`van-filter simple ${typeFilter === 'simple' && 'selected'}`}>Simple</button>

        <button onClick={()=> handleFilterChange('type', 'luxury')}
         className={`van-filter luxury ${typeFilter === 'luxury' && 'selected'}`}>Luxury</button>

        <button onClick={()=> handleFilterChange('type', 'rugged')}
         className={`van-filter rugged ${typeFilter === 'rugged' && 'selected'}`}>Rugged</button>

        {typeFilter && <button onClick={()=> handleFilterChange('type', null)}
         className="van-filter-clear">clear filters</button>}
      </div>
      
      <div className="van-list">
        {vanElements}
      </div>
    </section>
    </>
  )
}

export default Vans