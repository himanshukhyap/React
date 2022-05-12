import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { loader } from '../Redux/Action';

function AfterLoginLayout() {
    // const loaderstate = useSelector((state) => state.loader);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container">
                    <Link className='navbar-brand' to="/">Employee</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav">
                        <button className='mr-sm-2 btn btn-outline-dark' onClick={() => {
                    dispatch(loader(false))
                            setTimeout(() => {
                                sessionStorage.removeItem("OwnerLogin")
                                dispatch(loader(true))
                            Navigate("/Login")
                            }, 1000);
                        }}>Logout</button>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default AfterLoginLayout