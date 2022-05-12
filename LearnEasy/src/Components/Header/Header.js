import React from "react";
import "./Header.css";

import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch
} from "react-icons/ai";
import { GiUsaFlag } from "react-icons/gi";
import { Navbar, Nav, FormControl, Form } from "react-bootstrap";
import Dropdownn from "../../OtherComponents/DropDown/Dropdownn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import HomePage from "../../Pages/HomePage/HomePage";

export default function Header() {
  function doSomething() {
    alert("clicked");
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="headerNavbar"
      // variant=""
    >
      <Navbar.Brand as={Link} className="headernavbrand" to="">
        {/* <Route exact path="/" component={HomePage} />  */}
        Learn Easy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto headernavtop">
          <Dropdownn />
        </Nav>
        <Form className="headersearch">
          <FormControl
            type="search"
            placeholder="Search"
            className="headermr2"
            aria-label="Search"
          />
          <button className="headerserachbutton">
            <AiOutlineSearch />
          </button>
        </Form>
        <Nav className="headernavmarginsecond">
          <div className="headernavborder">
            <Nav.Link className="headernavlinkborder" href="#pricing">
              <AiOutlineShoppingCart color="#120f2d" size={30} />
            </Nav.Link>
          </div>
          <div className="headernavborder">
            <Nav.Link className="headernavlinkborder" href="#pricing">
              <AiOutlineUser className="hdsavicon" size={30} />
              <span>Login</span>
            </Nav.Link>
          </div>
          <Nav.Link className="headernavlinkborder l" href="#pricing">
            <GiUsaFlag className="hdsavicon" size={25} />
            <span>English</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
