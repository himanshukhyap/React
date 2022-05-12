import React from "react";
import {
  AiOutlineFile,
  AiOutlineHeart,
  AiOutlineMobile,
  AiOutlineSafetyCertificate
} from "react-icons/ai";
import { GrCloudDownload } from "react-icons/gr";
import { IoIosInfinite } from "react-icons/io";
import { IoAlarmOutline } from "react-icons/io5";
import { MdSlowMotionVideo } from "react-icons/md";
import { BrowserRouter, Link } from "react-router-dom";
import "./ProductPageSidebarCard.css";

export default function ProductPageSidebarCard() {
  return (
    <BrowserRouter>
      <div
        className="card shadow d-flex m-auto ProductPageSidebarCard"
        style={{ width: "24rem" }}
      >
        {/* <div className="embed-responsive embed-responsive-1by1 border">
          <iframe className="embed-responsive-item" src=""></iframe>
        </div>{" "} */}
        <img
          src="https://img-c.udemycdn.com/course/240x135/437398_46c3_10.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <div className="PPSCCArdbody1">
            <span className="card-title font-weight-bold">
              <h2>₹525</h2>
            </span>
            <span className="">
              <s>₹5120</s>
            </span>
            <span>
              <s>90% off</s>
            </span>
          </div>
          <div className="PPSCCArdbody2">
            <span>
              <IoAlarmOutline />
            </span>
            <span>10 hourse</span>
            <span> left at this price!</span>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <button type="button " className="productsidebarButtonAddtoCart">
              Add to cart
            </button>
            <button
              type="button "
              className="border productsidebarheartCart border border-dark"
            >
              <AiOutlineHeart size={30} />
            </button>
          </div>
          <button type="button" className="productsidebarBuy">
            Buy
          </button>

          <p className="card-text text-center pt-2 text-muted">
            30-Day Money-Back Guarantee
          </p>
        </div>
        <div className="card-body">
          <ul className="list-group m-0 p-0">
            <li className="list-group-item border border-0">
              <span className="ProductPageSidebarCardsavMmargin">
                <MdSlowMotionVideo size={20} />
              </span>
              <span>68 hours on-demand video</span>
            </li>
            <li className="list-group-item border border-0">
              <span className="ProductPageSidebarCardsavMmargin">
                <AiOutlineFile size={20} />
              </span>
              <span>20 articles</span>
            </li>
            <li className="list-group-item border border-0">
              <span className="ProductPageSidebarCardsavMmargin">
                <GrCloudDownload size={20} />
              </span>
              <span>18 downloadable resources</span>
            </li>
            <li className="list-group-item border border-0">
              <span className="ProductPageSidebarCardsavMmargin">
                <IoIosInfinite size={20} />
              </span>
              <span>Full lifetime access</span>
            </li>
            <li className="list-group-item border border-0">
              <span className="ProductPageSidebarCardsavMmargin">
                <AiOutlineMobile size={20} />
              </span>
              <span>Access on mobile and TV</span>
            </li>
            <li className="list-group-item border border-0">
              <span className="ProductPageSidebarCardsavMmargin">
                <AiOutlineSafetyCertificate size={20} />
              </span>
              <span>Certificate of completion</span>
            </li>
          </ul>
        </div>
        <div
          className="card-body d-flex justify-content-between"
          style={{ margin: "auto", width: "78%" }}
        >
          <Link
            to=""
            className="text-decoration-none ProductPageSidebarCardLink1"
          >
            {" "}
            Apply Coupon
          </Link>
          <Link className="text-decoration-none ProductPageSidebarCardLink2">
            {" "}
            Gift this course
          </Link>
        </div>
        <div className="card-body ProductPageSidebarCardFormCardBody">
          <form className="  ProductPageSidebarCardForm">
            <input
              className="ProductPageSidebarCardFormControl border border-dark"
              placeholder="Enter Coupon"
            />
            <button className="ProductPageSidebarCardFormButton text-white bg-dark font-weight-bold">
              Apply
            </button>
          </form>
        </div>
        <hr />
        <div className="card-body">
          <div className="card-text ">
            <h5 className="font-weight-bold"> Training 5 or more people?</h5>
            <p>Get your team access to 6,000+ top Udemy</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
