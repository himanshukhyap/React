import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import "./Studentsalsobought.css";

export default function Studentsalsobought() {
  return (
    <div className="card Studentsalsobought border-0">
      <Row>
        <Col sm={1} className="p-0">
          <img
            src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
            className="d-flex m-auto"
            alt="..."
            width="70px"
            height="80px"
          />
        </Col>
        <Col sm={6} className="Studentsalsobought2 ps-3">
          <h6 className="fw-bold">
            100 Days of Code - The Complete Python Pro Bootcamp for 2021
          </h6>
          <div className="d-flex">
            <span className="card-text bg-warning text-dark p-1">
              Bestseller
            </span>
            <span className="card-text text-success p-1">
              <b>63.5 total hours</b>
            </span>

            <span className="p-1">
              <span>Updated 8/2021</span>
            </span>
          </div>
        </Col>
        <Col
          sm={4}
          className="d-flex justify-content-between Studentsalsobought3 p-1"
        >
          <div className="">
            <span className="text-warning ">
              <b>4.7</b>
            </span>
            <span>
              <b>
                <AiFillStar className="text-warning font-weight-bold" />
              </b>
            </span>
          </div>
          <div>
            <span>
              <BsPeopleFill />
            </span>
            <span>210,024</span>
          </div>{" "}
          <div>
            <span>
              <b>₹5,120</b>
            </span>
          </div>
        </Col>
        <Col sm={1} className="Studentsalsobought4 p-0">
          <a href="" className="border border-dark rounded-circle link-dark">
            <AiOutlineHeart size={30} className="m-auto" />
          </a>
        </Col>
      </Row>
    </div>
  );
}
