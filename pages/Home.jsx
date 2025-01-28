import {NavLink, Link} from 'react-router-dom';

export default function Home() {    
    
    return (
        <>
        <main className="main">
            <section className="hero">
                <h1 className="heading-1">
                You got the travel plans, we got the travel vans.
                </h1>
                <p className="text">
                Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <Link to="/vans" className="hero-btn">
                    Find your van
                </Link>
            </section>
        </main>
        </>
    )
}