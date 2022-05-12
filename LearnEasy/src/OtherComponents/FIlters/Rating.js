import React from "react";
import { Accordion } from "react-bootstrap";

import { AiFillStar } from "react-icons/ai";
import "./Filter.css";
// import { FaBorderNone } from "react-icons/fa";

export default function Rating() {
  return (
    <>
      <Accordion.Header className="AccordionHeader ">Ratings</Accordion.Header>
      <Accordion.Body className="pt-3 pb-3 ps-0 pe-0">
        <div className="AccordionBody">
          <span>
            <input
              className="ratinginput"
              type="radio"
              id="rdio1"
              name="rdio1"
            />
          </span>
          <span>
            {" "}
            <AiFillStar color="#e59819" />
            <AiFillStar color="#e59819" />
            <AiFillStar color="#e59819" />
            <AiFillStar color="#e59819" />
            <AiFillStar color="#e59819" />{" "}
          </span>

          <span>4.5 &amp; up</span>

          <span>(8,887)</span>
        </div>
      </Accordion.Body>
    </>
  );
}
