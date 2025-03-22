import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <nav >
                <Link to="/">HOME</Link>
                <Link to="/todo">TODO</Link>
                <Link to="/counter">REDUX COUNTER</Link>
            </nav>
        </div>
    )
}

export default Home
