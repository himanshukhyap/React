import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiFillStar } from "react-icons/ai";
import "./Rating.css";
// import { FaBorderNone } from "react-icons/fa";

export default function VideoFilter() {
  return (
    <div className="ratingfilter">
      <Accordion className="accordionn">
        <AccordionSummary
          className="AccordionSummaryy"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="typographyy">Video Duration</Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetailss">
          <div className="ratingareadisplay">
            <div className="ratingarea">
              <span>
                {" "}
                <input className="ratinginput" type="checkbox" id="check1" />
              </span>

              <span>0-1 Hour</span>

              <span>(535)</span>
            </div>
            <div className="ratingarea">
              <span>
                {" "}
                <input className="ratinginput" type="checkbox" id="check2" />
              </span>

              <span>0-1 Hour</span>

              <span>(535)</span>
            </div>{" "}
            <div className="ratingarea">
              <span>
                {" "}
                <input className="ratinginput" type="checkbox" id="check3" />
              </span>

              <span>0-1 Hour</span>

              <span>(535)</span>
            </div>
            <div className="ratingarea">
              <span>
                {" "}
                <input className="ratinginput" type="checkbox" id="check4" />
              </span>

              <span>0-1 Hour</span>

              <span>(535)</span>
            </div>{" "}
          </div>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
