import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <>
    <section className="about-hero">
      <img src="../images/about-hero.png" alt="" className="about-img" />
      <div className="container">
      <div className="about-content">
        <p className="lead">
        Don’t squeeze in a sedan when you could relax in a van.
        </p>

        <p className="text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. <span>(Hitch costs extra 😉)</span></p>

        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

      <div className="box">
        <p className="box-text">Your destination is waiting. Your van is ready.</p>
        <Link to="/vans" className="box-btn">Explore our vans</Link>
      </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default About