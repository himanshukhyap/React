import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./TooltipRight.css";

export default function TooltipRight() {
  return (
    <Router>
      <div className="TooltipRight shadow">
        <h4>The Complete JavaScript Course 2021: From Zero to Expert!</h4>
        <div className="TooltipRightDiv1">
          Updated
          <span>
            <strong>August 2021</strong>
          </span>
        </div>
        <div className="TooltipRightDiv List">
          <span>34 total hours</span>
          <span>
            <li>All Levels</li>
          </span>{" "}
          <span>
            <li>Subtitles</li>
          </span>
        </div>
        <div className="TooltipRightDiv2">
          The modern JavaScript course for everyone! Master JavaScript with
          projects, challenges and theory. Many courses in one!
        </div>
        <div className="TooltipRightDivCheck">
          <span>
            <BiCheck />{" "}
          </span>
          <span>
            Develop modern, complex, responsive and scalable web applications
            with Angular 12
          </span>
        </div>
        <div className="TooltipRightDivCheck">
          <span>
            <div className="TooltipRightDivCheck">
              <span>
                <BiCheck />{" "}
              </span>
              <span>
                Develop modern, complex, responsive and scalable web
                applications with Angular 12
              </span>
            </div>
          </span>
        </div>
        <div className="TooltipRightDivCheck">
          <span>
            <BiCheck />{" "}
          </span>
          <span>
            Become job-ready by understanding how JavaScript really works behind
            the scenes
          </span>
        </div>
        <div className="TooltipRightDivButton">
          <button>Add to Cart</button>
          <Link>
            <AiOutlineHeart size={40} />
          </Link>
        </div>
      </div>
    </Router>
  );
}
