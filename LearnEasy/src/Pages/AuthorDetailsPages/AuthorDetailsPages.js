import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AuthorCourse from "../../Components/Carts/AuthorDetailsPages/AuthorCourse";
import { BsLink } from "react-icons/bs";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import "./AuthorDetailsPages.css";

export default function AuthorDetailsPages() {
  return (
    <Container>
      <Row className="mt-5 mb-5">
        <Col md={7}>
          <h6 className="text-muted">INSTRUCTOR</h6>
          <h1 className="fw-bold">Jonas Schmedtmann</h1>
          <p className="fw-bolder">Web Developer, Designer, and Teacher</p>
          <div className="d-flex mt-5">
            <div>
              <p className="text-muted mb-1">Total students</p>
              <h4 className="fw-bold">1,136,589</h4>
            </div>
            <div className="ms-5">
              <p className="text-muted mb-1">1,136,589 Reviews</p>
              <h4 className="fw-bold">243,949</h4>
            </div>
          </div>
          <div className="mt-5">
            <h6 className="fw-bolder">About me</h6>
            <div className="mt-3">
              <p>
                Hi, I'm Jonas! I have been identified as one of Udemy's Top
                Instructors and all my premium courses have earned the
                best-selling status for outstanding performance and student
                satisfaction.
              </p>
              <p>
                I'm a full-stack web developer and designer with a passion for
                building beautiful things from scratch. I've been building
                websites and apps since 2010 and also have a Master's degree in
                Engineering.
              </p>
              <p>
                I discovered my passion for teaching and helping others by
                sharing all I knew when I&nbsp;was in college, and that passion
                brought me to Udemy in 2015.
              </p>
              <p>
                Here, in all my courses, what students love the most is that I
                take the time to explain every concept in a way that everyone
                can easily understand.
              </p>
              <p>
                <strong>
                  <em>
                    So, do you want to learn how to build awesome websites with
                    modern HTML&nbsp;and CSS?
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>
                    Looking for a complete JavaScript course that takes you from
                    zero to an advanced developer?
                  </em>
                </strong>
              </p>
            </div>
          </div>
          <div className="mt-5 gap-4">
            <h5 className="fw-bolder">My courses (5)</h5>
            <div className="d-grid gap-4 mt-4">
              <Row className="" style={{ width: "fit-content" }}>
                <Col className="mb-4">
                  <AuthorCourse />
                </Col>
                <Col className="mb-4">
                  <AuthorCourse />
                </Col>
              </Row>

              <Row className="" style={{ width: "fit-content" }}>
                <Col className="mb-4">
                  <AuthorCourse />
                </Col>
                <Col className="mb-4">
                  <AuthorCourse />
                </Col>
              </Row>

              <Row className="" style={{ width: "fit-content" }}>
                <Col className="mb-4">
                  <AuthorCourse />
                </Col>
                <Col className="mb-4"></Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col md={5} className="AuthorDetailsPagesCol2">
          <img
            src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg"
            className="rounded-circle mx-auto d-block"
            alt="..."
          />
          <div className="mt-5 gap-2 col-5 mx-auto d-grid">
            <button className="border border-secondary bg-light" type="button">
              <span>
                <BsLink size={25} />
              </span>{" "}
              <span className="fw-bold">Website</span>
            </button>
            <button className="border border-secondary bg-light" type="button">
              <span>
                <AiOutlineTwitter size={25} />
              </span>{" "}
              <span className="fw-bold">Twitter</span>
            </button>
            <button className="border border-secondary bg-light" type="button">
              <span>
                <AiFillYoutube size={25} />
              </span>{" "}
              <span className="fw-bold">Youtube</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
