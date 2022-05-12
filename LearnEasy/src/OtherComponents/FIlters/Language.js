import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Rating.css";

export default function Language() {
  return (
    <div className="ratingfilter">
      <Accordion className="accordionn">
        <AccordionSummary
          className="AccordionSummaryy"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typographyy">Language</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetailss">
          <div className="ratingareadisplay">
            <div className="ratingarea">
              <span>
                {" "}
                <input
                  className="ratinginput"
                  type="checkbox"
                  id="checktopic1"
                />
              </span>

              <span>Python</span>

              <span>(143)</span>
            </div>
            <div className="ratingarea">
              <span>
                {" "}
                <input
                  className="ratinginput"
                  type="checkbox"
                  id="checktopic1"
                />
              </span>

              <span>WordPress</span>

              <span>(535)</span>
            </div>{" "}
            <div className="ratingarea">
              <span>
                {" "}
                <input
                  className="ratinginput"
                  type="checkbox"
                  id="checktopic1"
                />
              </span>

              <span>JavaScript</span>

              <span>(124)</span>
            </div>
            <div className="ratingarea">
              <span>
                {" "}
                <input
                  className="ratinginput"
                  type="checkbox"
                  id="checktopic1"
                />
              </span>

              <span>C#</span>

              <span>(535)</span>
            </div>{" "}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
