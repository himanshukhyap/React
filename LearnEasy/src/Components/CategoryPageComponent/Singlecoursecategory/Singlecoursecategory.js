import React from "react";
import { Card } from "react-bootstrap";
import "./Singlecoursecategory.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Singlecoursecategory() {
  return (
    <Router>
      <Card className="SinglecoursecategoryCard shadow">
        <Link>
          {" "}
          <Card.Img
            variant="top"
            src="https://demo.themewinter.com/wp/courselog/wp-content/uploads/2021/08/icon_4.png"
          />
        </Link>
        <Card.Body className="SinglecoursecategoryBody">
          <Link>Data Science & Analytics</Link>
          <Card.Text className="SinglecoursecategoryText">5 Course</Card.Text>
        </Card.Body>
      </Card>
    </Router>
  );
}
