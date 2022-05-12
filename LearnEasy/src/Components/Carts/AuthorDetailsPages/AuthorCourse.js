import React from "react";
import { HiStar } from "react-icons/hi";
import "./AuthorCourse.css";

export default function AuthorCourse() {
  return (
    <div className="card border-0" style={{ width: "18rem" }}>
      <img
        src="https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
        className="card-img-top border-top border-dark border-start-0 border-bottom-0 m-auto"
        alt="..."
      />
      <div className="card-body p-0 pt-2">
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
  );
}
