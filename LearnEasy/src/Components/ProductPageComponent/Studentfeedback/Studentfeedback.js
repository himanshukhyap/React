import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import ReactIcon from "../../../ReactIcon/ReactIcon";

import "./Studentfeedback.css";

export default function Studentfeedback() {
  return (
    <Row className="StudentfeedbackRow">
      <h3 className="fw-bolder">Student feedback</h3>
      <Col md={2} className="StudentfeedbackCol1 lh-lg">
        <div
          className="display-1 d-flex justify-content-center fw-bold "
          style={{ color: "#b4690e" }}
        >
          5
        </div>
        <div className="d-flex justify-content-center lh-base">
          {ReactIcon.fillstar}
          {ReactIcon.fillstar}

          {ReactIcon.fillstar}
          {ReactIcon.fillstar}
          {ReactIcon.fillstar}
        </div>
        <div
          className="d-flex justify-content-center fw-bold"
          style={{ color: "#b4690e" }}
        >
          Course Rating
        </div>
      </Col>
      <Col
        md={10}
        className="justify-content-between StudentfeedbackCol2 lh-lg m-auto"
      >
        <div className="d-flex lh-lg">
          <div className="progress StudentfeedbackProgress">
            <div
              className="progress-bar StudentfeedbackProgressBar"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <span>
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
            </span>
            <span className="ms-2">63%</span>
          </div>
        </div>
        <div className="d-flex lh-lg">
          <div className="progress StudentfeedbackProgress">
            <div
              className="progress-bar StudentfeedbackProgressBar"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <span>
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
            </span>
            <span className="ms-2">63%</span>
          </div>
        </div>{" "}
        <div className="d-flex lh-lg">
          <div className="progress StudentfeedbackProgress">
            <div
              className="progress-bar StudentfeedbackProgressBar"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <span>
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
            </span>
            <span className="ms-2">63%</span>
          </div>
        </div>{" "}
        <div className="d-flex lh-lg">
          <div className="progress StudentfeedbackProgress">
            <div
              className="progress-bar StudentfeedbackProgressBar"
              role="progressbar"
              style={{ width: "100%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div>
            <span>
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
              {ReactIcon.fillstar}
            </span>
            <span className="ms-2">63%</span>
          </div>
        </div>
      </Col>
    </Row>
  );
}
