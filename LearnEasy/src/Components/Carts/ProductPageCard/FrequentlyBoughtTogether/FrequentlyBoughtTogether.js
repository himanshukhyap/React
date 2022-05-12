import React from "react";

import { AiFillStar } from "react-icons/ai";
import "./FrequentlyBoughtTogether.css";

export default function FrequentlyBoughtTogether() {
  return (
    <div className="card FrequentlyBoughtTogether border-0 ">
      <div className="row">
        <div className="col-3">
          <img
            className="border"
            src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg"
            alt="..."
          />
        </div>
        <div className="col-9">
          <div className="card-body d-flex justify-content-between p-2 border-0">
            <div>
              <h6 className="card-text m-0">
                <b>
                  {" "}
                  Sales Training Masterclass - Selling In A Consumer Business
                </b>{" "}
              </h6>

              <p className="card-text m-0">
                <small className="text-muted">Salil Dhawan</small>
              </p>
              <p className="card-text m-0">
                <span className="text-warning">5.0</span>
                <span>
                  <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" />
                  <AiFillStar color="#b4690e" />
                </span>
                <span>(10)</span>
              </p>
            </div>
            <div className="">
              <b>₹5125</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
