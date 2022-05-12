import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AiFillStar } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { IoMdArrowDropright } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { RiClosedCaptioningLine } from "react-icons/ri";
import { BrowserRouter, Link } from "react-router-dom";
import { IoAlertCircleOutline } from "react-icons/io5";

import "./ProductPageBanner.css";
export default function ProductPageBanner() {
  return (
    <BrowserRouter>
      <div className="ProductPageBanner pt-5 pb-5 bg-dark text-white">
        <Container>
          <Row>
            <Col sm={7}>
              {" "}
              <div className="ProductPageBannerlink">
                <Link to="" className=" text-decoration-none">
                  Development <IoMdArrowDropright color="white" size={20} />
                </Link>

                <Link to="" className=" text-decoration-none" eventKey="link-1">
                  Web Development
                  <IoMdArrowDropright color="white" size={20} />
                </Link>

                <Link to="" className=" text-decoration-none" eventKey="link-2">
                  JavaScript
                </Link>
              </div>
              <div className="ProductPageBannerHeading">
                <h1>
                  The Complete JavaScript Course 2021: From Zero to Expert!
                </h1>
              </div>
              <div className="ProductPageBannerSubHeading">
                <h5>
                  {" "}
                  The modern JavaScript course for everyone! Master JavaScript
                  with projects, challenges and theory. Many courses in one!
                </h5>
              </div>
              <div className="ProductPageBannercontent1">
                <span>Bestseller</span>
                <span>
                  <Link to="" className="text-warning text-decoration-none">
                    <span>4.7</span>
                    <AiFillStar className="text-warning" />
                    <AiFillStar className="text-warning" />{" "}
                    <AiFillStar className="text-warning" />{" "}
                    <AiFillStar className="text-warning" />{" "}
                    <AiFillStar className="text-warning" />
                  </Link>
                </span>
                <span>
                  <Link to="" className="">
                    (113,418 ratings)
                  </Link>
                </span>
                <span>492,800 students</span>
              </div>
              <div className="ProductPageBannercontent2">
                <span> Created by </span>
                <span>
                  {" "}
                  <Link to="" className="">
                    Jonas Schmedtmann
                  </Link>
                </span>
              </div>
              <div className="ProductPageBannercontent3">
                <span>
                  <IoAlertCircleOutline color="white" />
                </span>
                <span>Last updated 7/2021</span>
                <span>
                  <MdLanguage color="white" />
                </span>
                <span> English</span>
                <span>
                  <RiClosedCaptioningLine color="white" />
                </span>
                <span> English, French [Auto]</span>
              </div>
            </Col>
            <Col sm={5}></Col>
          </Row>{" "}
        </Container>
      </div>
    </BrowserRouter>
  );
}
