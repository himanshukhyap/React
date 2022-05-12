import React from "react";
import "./HomepageCart.css";
import { Card, Row, Col, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineArrowRight
} from "react-icons/ai";
import { FaSignal } from "react-icons/fa";
export default function HomepageCart() {
  return (
    <Card className="cartt shadow">
      <Card.Img
        variant="top"
        src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg"
      />
      <div className="cardboarderthreesite">
        <div className="cartnutton">
          <button className="cartbuttonone">Art</button>
          <button className="cartbuttosecond">design</button>
        </div>
        <div className="price">
          <span className="course">$500 </span>
        </div>

        <Card.Body>
          <Card.Title>
            <a
              className="adesign"
              href="https://demo.themewinter.com/wp/courselog/courses/music-theory-learn-new-student-fundamentals/"
            >
              Music Theory Learn New student &amp; Fundamentals
            </a>
          </Card.Title>
          <div className="authorareacartborder">
            <div className="innerauthorareacartborder">
              <img
                src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/learn-press-profile/19/ac6a1c0685e30ffed22b99c763961dde.png"
                alt="artincorsese"
                className="m"
                data-ll-status="loaded"
              />

              <a
                style={{ textDecoration: "none", paddingLeft: "5px" }}
                href="https://demo.themewinter.com/wp/courselog/profile/artincorsese/"
              >
                <span>artincorsese</span>
              </a>
            </div>
          </div>
          <div className="cardbodylastdiv">
            <div className="cardbodylastdivinnerdiv">
              <span>
                {" "}
                <FaSignal color="#F14D5D" />
              </span>
              <span className="formarginincarticon">beginner</span>
            </div>{" "}
            <div className="cardbodylastdivinnerdiv">
              <span>
                {" "}
                <AiOutlineClockCircle color="#F14D5D" />
              </span>
              <span className="formarginincarticon"> 10 week</span>
            </div>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}
