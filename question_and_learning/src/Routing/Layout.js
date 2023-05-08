import { Outlet, Link } from "react-router-dom";
import Output from "./Output";

const Layout = () => {
  return (
    <>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link className="nav-link" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav> */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Output/>
      <Outlet />
    </>
  )
};

export default Layout;

// The <Outlet> renders the current route selected.

// <Link> is used to set the URL and keep track of browsing history.

// Anytime we link to an internal path, we will use <Link> instead of <a href="">.