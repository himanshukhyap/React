import React from "react";
import "./HomePage.css";
import { Nav, Container, Row, Col, Button, NavItem } from "react-bootstrap";
import HomepageCart from "../../Components/Carts/homepagecart/HomepageCart";
import HomePageBanner from "../../Components/BannerSection/homePageBanner/HomePageBanner";
import MiddleSection from "./MiddleSection";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
export default function HomePage() {
  return (
    <div>
      <Header />
      <HomePageBanner />
      <div className="stbackgroundcolor">
        <div className="sectionTop">
          <div className="stheading">
            <h2>Latest Trending Courses</h2>
          </div>
          <div className="stnavpadding">
            <Nav className="hpstnavn" variant="pills" defaultActiveKey="/home">
              <Nav.Item className="hpntnavitemn">
                <Nav.Link href="/home">
                  <ul>
                    <li>Python</li>
                  </ul>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>Framework</Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>ReactJS</Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>AngularJS</Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>Angular CLI</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Row className="HomePageRowforHomepageCard">
            <Col>
              <div className="hphomecart">
                <HomepageCart />
              </div>
            </Col>
            <Col>
              <div className="hphomecart">
                <HomepageCart />
              </div>
            </Col>
            <Col>
              <div className="hphomecart">
                <HomepageCart />
              </div>
            </Col>
            <Col>
              <div className="hphomecart">
                <HomepageCart />
              </div>
            </Col>
            <Col>
              <div className="hphomecart">
                <HomepageCart />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="middlesectionpadding">
        <div className="mddleheading">
          {" "}
          <h2>Top categories</h2>
        </div>
        <Row className="HomePageRowforMiddleSection">
          <Col>
            <MiddleSection />
          </Col>
          <Col>
            <MiddleSection />
          </Col>
          <Col>
            <MiddleSection />
          </Col>
          <Col>
            <MiddleSection />
          </Col>
          <Col>
            <MiddleSection />
          </Col>
        </Row>

        <div className="mdsectioncartbutton">
          <button className="submdsectioncartbutton">All Categories</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
