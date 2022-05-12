import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { HiStar } from "react-icons/hi";
import "./MoreCoursesby.css";

export default function MoreCoursesby() {
  return (
    <>
      <h4 className="fw-bold mb-3">
        More Courses by <a href="">Jonas Schmedtmann</a>
      </h4>
      <Row className="MoreCoursesbyRow">
        <Col sm={4} className="">
          <div className="card border-0" style={{ width: "15rem" }}>
            <img
              src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
              className="card-img-top border-top border-dark border-start-0 border-bottom-0 m-auto"
              alt="..."
            />
            <div className="card-body p-0 pt-1">
              <h5 className="card-title m-0 fw-bold">
                2021 Complete Python Bootcamp From Zero to Hero in Python
              </h5>
              <p className="card-text m-0">
                <small className="text-muted">Jose Portilla</small>
              </p>
              <p className="card-text m-0">
                <span>4.6</span>
                <span className="ms-1">
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                </span>
                <span className="ms-1 text-muted">
                  <small>(37562)</small>
                </span>
              </p>
              <p className="card-text m-0 text-muted">
                <small className=" d-flex">
                  <span>49.5 total hours </span>

                  <li className="ms-2">15 lectures</li>
                  <li className="ms-2"> All Levels</li>
                </small>
              </p>
              <p className="card-text mt-1 fw-bolder">₹5,120</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="card border-0" style={{ width: "15rem" }}>
            <img
              src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
              className="card-img-top border-top border-dark border-start-0 border-bottom-0 m-auto"
              alt="..."
            />
            <div className="card-body p-0 pt-1">
              <h5 className="card-title m-0 fw-bold">
                2021 Complete Python Bootcamp From Zero to Hero in Python
              </h5>
              <p className="card-text m-0">
                <small className="text-muted">Jose Portilla</small>
              </p>
              <p className="card-text m-0">
                <span>4.6</span>
                <span className="ms-1">
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                </span>
                <span className="ms-1 text-muted">
                  <small>(37562)</small>
                </span>
              </p>
              <p className="card-text m-0 text-muted">
                <small className=" d-flex">
                  <span>49.5 total hours </span>

                  <li className="ms-2">15 lectures</li>
                  <li className="ms-2"> All Levels</li>
                </small>
              </p>
              <p className="card-text mt-1 fw-bolder">₹5,120</p>
            </div>
          </div>
        </Col>
        <Col sm={4} className="">
          <div className="card border-0" style={{ width: "15rem" }}>
            <img
              src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
              className="card-img-top border-top border-dark border-start-0 border-bottom-0 m-auto"
              alt="..."
            />
            <div className="card-body p-0 pt-1">
              <h5 className="card-title m-0 fw-bold">
                2021 Complete Python Bootcamp From Zero to Hero in Python
              </h5>
              <p className="card-text m-0">
                <small className="text-muted">Jose Portilla</small>
              </p>
              <p className="card-text m-0">
                <span>4.6</span>
                <span className="ms-1">
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                  <HiStar color="#b4690e" />
                </span>
                <span className="ms-1 text-muted">
                  <small>(37562)</small>
                </span>
              </p>
              <p className="card-text m-0 text-muted">
                <small className=" d-flex">
                  <span>49.5 total hours </span>

                  <li className="ms-2">15 lectures</li>
                  <li className="ms-2"> All Levels</li>
                </small>
              </p>
              <p className="card-text mt-1 fw-bolder">₹5,120</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
