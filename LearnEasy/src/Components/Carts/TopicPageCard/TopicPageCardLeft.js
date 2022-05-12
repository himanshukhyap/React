import React from "react";
import { Card } from "react-bootstrap";
import "./TopicPageCardLeft.css";
import { MdComputer } from "react-icons/md";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function TopicPageCardLeft() {
  return (
    // <h1>sdsad</h1>
    <Router>
      <Card className="TopicPageCardLeft">
        {" "}
        <MdComputer size={60} />
        <Card.Body>Go somewhere</Card.Body>
      </Card>
    </Router>
  );
}
