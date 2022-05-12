import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";

import "./CourseQuickView.css";

export default function CourseQuickView() {
  return (
    <div className="courseQuickView">
      <h3>What you’ll learn</h3>
      <div className="courseQuickViewMiddle">
        <span>
          <BiCheck />{" "}
        </span>
        <span>Be able to build ANY website you want.</span>
      </div>
      <div className="courseQuickViewMiddle">
        <span>
          <BiCheck />{" "}
        </span>
        <span>
          Craft a portfolio of websites to apply for junior developer jobs.
        </span>
      </div>
      <div className="courseQuickViewMiddle">
        <span>
          <BiCheck />{" "}
        </span>
        <span>
          Build fully-fledged websites and web apps for your startup or
          business.
        </span>
      </div>
      <div className="courseQuickViewBottom">
        <button>Add to Cart</button>
        <a href="">
          <AiOutlineHeart size={40} />
        </a>
      </div>
    </div>
  );
}
