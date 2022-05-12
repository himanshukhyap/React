import React from "react";
import { Row, Col, Nav, ListGroup, Accordion } from "react-bootstrap";
import CoursePageBanner from "../../Components/BannerSection/CoursePageBanner/CoursePageBanner";
import "./CoursePage.css";
import { BiFilter } from "react-icons/bi";
import { IoIosAlert } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";
import CoursePageCart from "../../Components/Carts/CoursePageCart/CoursePageCart";
import HomepageCart from "../../Components/Carts/homepagecart/HomepageCart";

import DevelopmentCard from "../../Components/Carts/DevelopmentCourseCard/DevelopmentCard/DevelopmentCard";

import Rating from "../../OtherComponents/FIlters/Rating";
import Feature from "../../OtherComponents/FIlters/Feature";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ReactHover, { Trigger, Hover } from "react-hover";
import CourseQuickView from "../../OtherComponents/ToolTip/CourseQuickView";

export default function CoursePage() {
  const optionsCursorTrueWithMargin = {
    followCursor: false,
    shiftX: 0,
    shiftY: 0
  };

  return (
    <div>
      <Header />
      <CoursePageBanner />
      <div className="coursepagesection2">
        <Row>
          <Col className="coursepagesection2Col1" md={3}>
            <div className="cpuldiv">
              <h2 className="ul">Popular Topics</h2>
              <ul className="list-group list-group-flush cpul">
                <li className="list-group-item cpulli">
                  {" "}
                  <a href="">Python</a>
                </li>
                <li className="list-group-item cpulli">
                  {" "}
                  <a href="">JavaScript</a>
                </li>
                <li className="list-group-item cpulli">
                  {" "}
                  <a href="">ReactJs</a>
                </li>
                <li className="list-group-item cpulli">
                  {" "}
                  <a href="">Machine Learning</a>
                </li>
                <li className="list-group-item cpulli">
                  {" "}
                  <a href="">Java</a>
                </li>
              </ul>
            </div>

            <button>
              Browse all categories{" "}
              <BsArrowRightShort className="cpicon" size={24} />
            </button>
          </Col>
          <Col md={9}>
            <h2 className="cpcol8heading">Featured course</h2>

            <CoursePageCart />
          </Col>
        </Row>
      </div>
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
                    <li>Newly Added</li>
                  </ul>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>Most Popular</Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>Top Liked</Nav.Link>
              </Nav.Item>
              <Nav.Item className="hpntnavitemn">
                <Nav.Link>Recommended</Nav.Link>
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
      <div className="coursepagesection4">
        <div className="coursepagesection4heading">
          <h2>All Development courses</h2>
        </div>
        <div className="refundNotice">
          <span>
            <IoIosAlert size={30} />
          </span>{" "}
          <h3 className="refundNoticeheading">
            Not sure? All courses have a 30-day money-back guarantee
          </h3>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex">
            <button className="border border-secondary px-3 bg-light fw-bold">
              <span>
                <BiFilter size={25} />
              </span>
              <span className="ms-2">Filter</span>
            </button>

            <form action="">
              <select
                className="form-select px-4 py-3 ms-4 border border-secondary bg-light fw-bold MostPopularButton"
                name="cars"
                id="MostPopular"
              >
                <option value="">Most Popular</option>
                <option value="">Highest Rated</option>
                <option value="">Newest</option>
              </select>
            </form>
          </div>{" "}
          <span>10,000 results</span>
        </div>
        <Row>
          <Col sm={3}>
            <Accordion className="AccordionCoursePage">
              <ul className="list-group ">
                <li className="list-group-item border-start-0 border-end-0 ps-0 pe-0">
                  <Accordion.Item eventKey="0" className="border-0 ">
                    <Feature />
                  </Accordion.Item>
                </li>
                <li className="list-group-item border-start-0 border-end-0 ps-0 pe-0">
                  <Accordion.Item eventKey="1" className="border-0 ">
                    <Rating />
                    <Accordion.Body className="pt-3 pb-3 ps-0 pe-0"></Accordion.Body>
                  </Accordion.Item>
                </li>
              </ul>
            </Accordion>
          </Col>
          <Col sm={9}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <ReactHover
                  options={optionsCursorTrueWithMargin}
                  className="reactHovercard"
                >
                  <Trigger type="trigger" className="reactHovercardTrigger">
                    {" "}
                    <DevelopmentCard />
                  </Trigger>
                  <Hover type="hover" className="reactHovercardHover">
                    <CourseQuickView />
                  </Hover>
                </ReactHover>{" "}
              </ListGroup.Item>
            </ListGroup>{" "}
            {/* */}
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
