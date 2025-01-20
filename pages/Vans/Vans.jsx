import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <Link to={`/vans/${van.id}`} key={van.id}>
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
      <div className="van-list">
        {vanElements}
      </div>
    </section>
    </>
  )
}

export default Vans