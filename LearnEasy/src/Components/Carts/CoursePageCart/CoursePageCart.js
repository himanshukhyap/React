import React from "react";
import { Card } from "react-bootstrap";
import "./CoursePageCart.css";
import { AiFillStar } from "react-icons/ai";
export default function CoursePageCart() {
  return (
    <div className="CoursePageCart">
      <Card className="cpccard shadow">
        <Card.Img
          variant="top"
          className="cpccardimg"
          src="https://img-c.udemycdn.com/course/240x135/4192588_1435.jpg"
          srcset="https://img-c.udemycdn.com/course/240x135/4192588_1435.jpg 1x, https://img-c.udemycdn.com/course/480x270/4192588_1435.jpg 2x"
        />
        <Card.Body>
          <Card.Title className="CoursePageCardCardTitle">
            Sales Training Masterclass - Selling In A Consumer Business
          </Card.Title>
          <Card.Text className="cpccardtext1">
            Learn how to sell your product or service in a consumer facing
            business. Learn sales skills for exponential growth.
          </Card.Text>
          <Card.Text className="cpccardtext2"> By Salil Dhawan</Card.Text>
          <Card.Text className="cpccardtext3">
            <span>Updated </span>
            <span>
              <strong>August 2021</strong>
            </span>{" "}
            <span>1 total hour</span>
            <span>
              {" "}
              <ul>
                <li>15 lectures </li>
                <li>All Levels</li>
              </ul>
            </span>
          </Card.Text>
          <Card.Text className="cpccardtext4">
            <span>5.0</span>
            <span>
              <AiFillStar className="cpccarticons" color="#b4690e" />
              <AiFillStar className="cpccarticons" color="#b4690e" />
              <AiFillStar className="cpccarticons" color="#b4690e" />
              <AiFillStar className="cpccarticons" color="#b4690e" />
              <AiFillStar className="cpccarticons" color="#b4690e" />
            </span>
            <span>(10)</span>
            <button className="cardratingbutton">Highest rated</button>
          </Card.Text>
          <Card.Text className="cpccardtext5">₹1,280</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
