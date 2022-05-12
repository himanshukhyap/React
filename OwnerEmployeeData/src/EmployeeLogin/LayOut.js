import React from 'react'

import { Link, Outlet } from 'react-router-dom'

function LayOut() {
 
    return (
        <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container">
                <Link className='navbar-brand' to="/">Employee</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <Link className="btn btn-success mr-sm-2" to="/Login" role="button">LOG IN</Link>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default LayOut