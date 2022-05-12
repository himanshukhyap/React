import React from "react";
import { Accordion } from "react-bootstrap";

import "./Filter.css";

export default function Feature() {
  return (
    <>
      <Accordion.Header className="AccordionHeader ">Feature</Accordion.Header>
      <Accordion.Body className="pt-3 pb-3 ps-0 pe-0">
        <div className="AccordionBody">
          <span>
            <input className="FeatureInput" type="checkbox" id="checktopic1" />
          </span>

          <span>Python</span>

          <span>(143)</span>
        </div>
      </Accordion.Body>
    </>
  );
}
