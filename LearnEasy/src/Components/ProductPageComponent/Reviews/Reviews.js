import React from "react";
import { BiDislike, BiFilter, BiLike } from "react-icons/bi";
import ReactIcon from "../../../ReactIcon/ReactIcon";
import "./Reviews.css";
import "../../Carts/ProductPageCard/Featuredreview/Featuredreview.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Dropdown, DropdownButton } from "react-bootstrap";
export default function Reviews() {
  return (
    <div>
      <h3 className="fw-bolder">Reviews</h3>
      <div className="d-flex justify-content-between mt-3">
        <form className="d-flex w-75">
          <input
            className="form-control ReviewsInput rounded-0 border border-dark py-2 bg-light"
            placeholder="Search"
          />
          <button
            className="btn ReviewsButtonIco btn-outline-primary rounded-0"
            style={{ width: "50px" }}
            type="submit"
          >
            <AiOutlineSearch size={20} />
          </button>
        </form>

        <form action="">
          <select
            className="form-select px-4 py-2 ms-4 border border-secondary bg-light fw-bold MostPopularButton"
            name="cars"
            id="MostPopular"
          >
            <option value="">All Rating</option>
            <option value="">Highest Rated</option>
            <option value="">Newest</option>
          </select>
        </form>
      </div>
      <ul className="list-group list-group-flush mt-3">
        <li className="list-group-item ps-0 pt-3">
          <div className="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-1">
                <div className="d-flex ReviewsImg">K</div>
              </div>
              <div className="col-md-11">
                <div className="card-body p-0">
                  <p className="card-text fw-bolder mb-1">Keerthivenkatesh</p>
                  <div className="card-text mb-2">
                    <span style={{ color: "#e59819" }}>
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                    </span>
                    <span className="ms-2">4 weeks ago</span>
                  </div>
                  <p className="card-text mb-0">
                    Really amazing course each lecture are very clear cut
                    explanation. His way of teaching style are very superb!
                    Whenever anyone asked me, for javascript. Definitely I
                    recommended this.
                  </p>
                  <p className="card-text mb-1">
                    <small className="text-muted">
                      Was this review helpful?
                    </small>
                  </p>
                  <div className="d-flex justify-content-start">
                    <div className="border border-dark rounded-circle FeaturedreviewLike m-2">
                      <BiLike size={30} />
                    </div>
                    <div className="border border-dark rounded-circle FeaturedreviewLike m-2">
                      <BiDislike size={30} />
                    </div>

                    <a href="" className=" text-dark m-3">
                      Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item ps-0 pt-3">
          <div className="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-1">
                <div className="d-flex ReviewsImg">K</div>
              </div>
              <div className="col-md-11">
                <div className="card-body p-0">
                  <p className="card-text fw-bolder mb-1">Keerthivenkatesh</p>
                  <div className="card-text mb-2">
                    <span style={{ color: "#e59819" }}>
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                      {ReactIcon.fillstar}
                    </span>
                    <span className="ms-2">4 weeks ago</span>
                  </div>
                  <p className="card-text mb-0">
                    Really amazing course each lecture are very clear cut
                    explanation. His way of teaching style are very superb!
                    Whenever anyone asked me, for javascript. Definitely I
                    recommended this.
                  </p>
                  <p className="card-text mb-1">
                    <small className="text-muted">
                      Was this review helpful?
                    </small>
                  </p>
                  <div className="d-flex justify-content-start">
                    <div className="border border-dark rounded-circle FeaturedreviewLike m-2">
                      <BiLike size={30} />
                    </div>
                    <div className="border border-dark rounded-circle FeaturedreviewLike m-2">
                      <BiDislike size={30} />
                    </div>

                    <a href="" className=" text-dark m-3">
                      Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <button className="btn btn-dark shadow-none m-auto w-100 mt-1 p-2 border-0 fw-bold">
        See more reviews
      </button>
    </div>
  );
}
