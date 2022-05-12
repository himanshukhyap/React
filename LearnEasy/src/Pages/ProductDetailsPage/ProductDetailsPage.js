import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";
import { BrowserRouter, Link } from "react-router-dom";
import { SiUdemy } from "react-icons/si";
import ProductPageBanner from "../../Components/BannerSection/ProductPageBanner/ProductPageBanner";
import "./ProductDetailsPage.css";
import AccordionPannel from "../../Components/ProductPageComponent/AccordionPannel/AccordionPannel";
import ProductPageSidebarCard from "../../Components/Carts/ProductPageCard/ProductPageSidebarCard/ProductPageSidebarCard";
import Featuredreview from "../../Components/Carts/ProductPageCard/Featuredreview/Featuredreview";
import Studentalsobought from "../../Components/Carts/ProductPageCard/Studentsalsobought/Studentsalsobought";
import FrequentlyBoughtTogether from "../../Components/Carts/ProductPageCard/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import { AiOutlinePlus } from "react-icons/ai";
import Instructor from "../../Components/Carts/ProductPageCard/Instructor/Instructor";
import Studentfeedback from "../../Components/ProductPageComponent/Studentfeedback/Studentfeedback";
import Reviews from "../../Components/ProductPageComponent/Reviews/Reviews";
import MoreCoursesby from "../../Components/Carts/ProductPageCard/MoreCoursesby/MoreCoursesby";

export default function ProductDetailsPage() {
  return (
    <BrowserRouter>
      <div className="ProductDetailsPage">
        <ProductPageBanner />
        <Container>
          <Row>
            <Col sm={7}>
              <Card
                body
                className="ProductDetailsPageCard1 border border-secondary shadow mt-5"
              >
                <h3>What you'll learn</h3>
                <Row>
                  <Col>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                    <div className="d-flex mt-2">
                      <span>
                        <BiCheck />
                      </span>
                      <span>
                        Become an advanced, confident, and modern JavaScript
                        developer from scratch
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card
                body
                className="ProductDetailsPageCard2 border border-secondary shadow "
              >
                <span>
                  <SiUdemy size={30} />
                </span>{" "}
                Curated for the{" "}
                <Link className="text-decoration-none border-bottom" to="">
                  Udemy Business
                </Link>{" "}
                collection
              </Card>{" "}
              <AccordionPannel />
              <div className="ProductPageSection1">
                <h3>AccordionPannelAccordionn</h3>
                <ul>
                  <li>
                    No coding experience is necessary to take this course! I
                    take you from beginner to expert!
                  </li>
                  <li>
                    Any computer and OS will work — Windows, macOS or Linux. We
                    will set up your text editor the course.
                  </li>
                  <li>
                    A basic understanding of HTML and CSS is a plus, but not a
                    must! The course includes an HTML and CSS crash course.
                  </li>
                </ul>
              </div>
              <Card body className="border p-0">
                <h3 className="fw-bold">Top companies trust Udemy</h3>
                <h5 className="my-3">
                  Get your team access to Udemy's top 6,000+ courses
                </h5>
                <div>
                  <img
                    alt="Box"
                    height="44"
                    width="67"
                    src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
                  />
                  <img
                    className="mx-4"
                    alt="Volkswagen"
                    height="44"
                    width="44"
                    src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
                  />
                  <img
                    className="mx-4"
                    alt="Netflix"
                    height="44"
                    width="101"
                    src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg"
                  />
                  <img
                    className="mx-4"
                    alt="Eventbrite"
                    height="44"
                    width="115"
                    src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
                  />
                </div>
                <button className="px-3 py-2 mt-4 bg-white text-dark border border-secondary fw-bold">
                  Try Udemy Business
                </button>
              </Card>
              <div className="card border-0 ProductPageSection3 mt-4">
                <div className="card-body">
                  <h3 className="font-weight-bold">Description</h3>
                  <p>
                    <strong>
                      <em>
                        ***&nbsp;The #1 bestselling JavaScript&nbsp;course on
                        Udemy! ***
                      </em>
                    </strong>
                  </p>
                  <p>
                    <strong>
                      <em>
                        *** Completely re-built from scratch in October 2020 (68
                        hours video) ***
                      </em>
                    </strong>
                  </p>
                  <p>
                    <em>
                      "Really, really well made course. Super in-depth, with
                      great challenges and projects that will solidify your
                      Javascript understanding. I found the lectures were paced
                      perfectly -- Jonas doesn't skip over anything that might
                      be useful to a JS developer"
                    </em>{" "}
                    — Carson Bartholomew
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    JavaScript is the most popular programming language in the
                    world. It powers the entire modern web. It provides millions
                    of high-paying jobs all over the world.
                  </p>
                  <p>
                    That's why you want to learn JavaScript too. And you came to
                    the right place!
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>
                      Why is this the right JavaScript course for you?
                    </strong>
                  </p>
                </div>
              </div>
              <Featuredreview />
              <div className="StudentAlsoBoughtSection mt-5">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-0">
                    <Studentalsobought />
                  </li>
                  <li className="list-group-item p-0">
                    <Studentalsobought />
                  </li>
                  <li className="list-group-item p-0">
                    <Studentalsobought />
                  </li>
                  <li className="list-group-item p-0">
                    <Studentalsobought />
                  </li>
                </ul>
                <hr />
                <button className="btn btn-dark shadow-none m-auto w-100 mt-1 p-2 border-0 fw-bold">
                  Show More
                </button>
              </div>
              <div className="ProductPageSection7 mt-5">
                <div className="card p-3">
                  <h3 className=" pb-2">Frequently Bought Together</h3>
                  <div className="card-body p-0">
                    <FrequentlyBoughtTogether />
                  </div>
                  <div className="border-0 rounded-circle shadow ProductPageSection7SVGdiv">
                    <AiOutlinePlus
                      size={40}
                      className="ProductPageSection7SVG"
                    />
                  </div>
                  <div className="card-body p-0">
                    <FrequentlyBoughtTogether />
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <span>Total:</span>
                        <span className="ps-2">
                          <b>₹10,240</b>
                        </span>
                      </div>
                      <div>
                        <button className="btn" type="button">
                          Add all to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <Instructor />
              </div>
              <div className="mt-4">
                <Studentfeedback />
              </div>
              <div className="mt-4 mb-3">
                <Reviews />
              </div>
              <div className="mt-5 mb-4">
                <MoreCoursesby />
                <hr />
                <button className="btn btn-dark shadow-none m-auto w-100 mt-1 p-2 border-0 fw-bold">
                  Report abuse
                </button>
              </div>
            </Col>

            <Col sm={5} className="justify-content-center mt-5">
              <ProductPageSidebarCard />
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}
