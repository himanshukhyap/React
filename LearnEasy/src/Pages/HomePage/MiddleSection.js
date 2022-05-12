import React from "react";
import "./MiddleSection.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
export default function MiddleSection() {
  return (
    <div>
      <div className="carddd">
        <img src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/01/course_image7.jpg" />

        {/* <button>Add to Cart</button> */}
        <Row className="mdrowsection">
          <Col className="mdrowsectioncol1" sm={8}>
            Web Designing
          </Col>
          <Col className="mdrowsectioncol2" sm={4}>
            <button>
              <AiOutlineArrowRight color="white" />
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
