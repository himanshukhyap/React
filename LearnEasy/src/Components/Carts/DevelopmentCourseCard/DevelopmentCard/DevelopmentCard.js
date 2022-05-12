import React from "react";
import { Card } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import courseQuickView from "../../../../OtherComponents/ToolTip/CourseQuickView";
import "./DevelopmentCard.css";

import CourseQuickView from "../../../../OtherComponents/ToolTip/CourseQuickView";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
export default function DevelopmentCard() {
  return (
    <div className="card mb-3 border-0">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
            className="border border-secondary border-top-0 shadow-sm"
            alt="..."
            height="160px"
            width="250px"
          />
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between">
            {" "}
            <div className="card-body p-1">
              <h5 className="card-title fw-bold mb-1">
                The Complete 2021 Software Testing Bootcamp
              </h5>
              <p className="card-text mb-0">
                Everything you need to learn about software
                <strong className="ps-1">testing</strong>
              </p>
              <p className="card-text mb-0">
                <small>Valentin Despa, Learn with Valentine</small>
              </p>

              <p className="card-text mb-0">
                {" "}
                <span>5.0</span>
                <span className="ms-2">
                  <AiFillStar
                    className="developmentcpccarticons"
                    color="#b4690e"
                  />
                  <AiFillStar
                    className="developmentcpccarticons"
                    color="#b4690e"
                  />
                  <AiFillStar
                    className="developmentcpccarticons"
                    color="#b4690e"
                  />
                  <AiFillStar
                    className="developmentcpccarticons"
                    color="#b4690e"
                  />
                  <AiFillStar
                    className="developmentcpccarticons"
                    color="#b4690e"
                  />
                </span>
                <span className="ms-2 text-muted">(10)</span>
              </p>

              <p className="card-text mb-0 text-muted">
                <small className=" d-flex">
                  <span>49.5 total hours </span>

                  <li className="ms-4">15 lectures</li>
                  <li className="ms-4"> All Levels</li>
                </small>
              </p>
            </div>{" "}
            <div className="d-grid mb-auto">
              <span className="fw-bold">₹525</span>
              <span>
                <del>₹2560</del>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* <Card className="developmentcpccard ">
       <Card.Img
        variant="top"
        className="development"
        src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
        srcset="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg 1x, https://img-c.udemycdn.com/course/480x270/567828_67d0.jpg 2x"
      />

      <Card.Body className="cardbodydevelopmentcard">
        <div className="cardbodyinnerdiv1">
          <Card.Title className="developmentcpccardtitle">
            {" "}
            Sales Training Masterclass - Selling In A Consumer Business
          </Card.Title>
          <Card.Text className="developmentcpccardtext1">
            Learn how to sell your product or service in a consumer facing
            business. Learn sales skills for exponential growth.
          </Card.Text>
          <Card.Text className="developmentcpccardtext2">
            Salil Dhawan
          </Card.Text>
          <Card.Text className="developmentcpccardtext4">
            <span>5.0</span>
            <span>
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
              <AiFillStar className="developmentcpccarticons" color="#b4690e" />
            </span>
            <span>(10)</span>
          </Card.Text>
          <Card.Text className="developmentcpccardtext3">
            <span>22 total hour</span>
            <span>
              <ul>
                <li>155 lectures </li>
                <li>All Levels</li>
              </ul>
            </span>
          </Card.Text>
        </div>
        <div className="cardbodyinnerdiv2">₹525</div>
      </Card.Body>
    </Card> */
