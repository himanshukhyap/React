import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";
import "./AccordionPannel.css";

export default function AccordionPannel() {
  return (
    <BrowserRouter>
      <Accordion defaultActiveKey="0" className="AccordionPannelAccordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="AccordionPannelHeader">
            <div className="d-flex fw-bold">
              <span>Course Structure and Projects</span>
            </div>
            <span>5 hourse</span>
          </Accordion.Header>
          <Accordion.Body className="d-flex justify-content-between">
            <div>
              <span>
                <AiFillPlayCircle size={19} className="AccordionPannelsvg" />
              </span>
              <span>
                <Link>Course Structure and Projects</Link>
              </span>
            </div>
            <span>05:25</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="AccordionPannelHeader">
            <div className="d-flex fw-bold">
              <span>Course Structure and Projects</span>
            </div>
            <span>5 hourse</span>
          </Accordion.Header>
          <Accordion.Body className="d-flex justify-content-between">
            <div>
              <span>
                <AiFillPlayCircle size={19} className="AccordionPannelsvg" />
              </span>
              <span>
                <Link>Course Structure and Projects</Link>
              </span>
            </div>
            <span>05:25</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </BrowserRouter>
  );
}
