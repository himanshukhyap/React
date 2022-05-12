import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { SiGooglecalendar } from "react-icons/si";
import CoursesInCart from "../../Components/Carts/ShoppingCart/CoursesInCart/CoursesInCart";
import PriceCart from "../../Components/Carts/ShoppingCart/PriceCart/PriceCart";
import Recentlywishlisted from "../../Components/Carts/ShoppingCart/Recentlywishlisted/Recentlywishlisted";
import SaveForLater from "../../Components/Carts/ShoppingCart/SaveForLater/SaveForLater";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  return (
    <>
      <div
        className="bg-dark text-white d-flex align-items-center"
        style={{ height: "138px" }}
      >
        <h1 className="fw-bolder container"> Shopping Cart</h1>
      </div>
      <Container>
        <Row className="mt-5">
          <Col sm={8}>
            <div className="card bg-warning">
              <div className="card-body fw-bold my-2">
                <span>
                  <SiGooglecalendar size={25} className="me-2" />
                </span>{" "}
                <span className="p">
                  All courses have a 30-day money-back guarantee.
                  <a className="text-decoration-none fw-bold" href="">
                    Restrictions apply.
                  </a>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="h5">6 Courses in Cart</div>
              <ul class="list-group">
                <li class="list-group-item p-2">
                  <CoursesInCart />
                </li>
                <li class="list-group-item p-2">
                  {" "}
                  <CoursesInCart />
                </li>
                <li class="list-group-item p-2">
                  {" "}
                  <CoursesInCart />
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="h5">Saved for later</div>
              <ul class="list-group">
                <li class="list-group-item p-2">
                  <SaveForLater />
                </li>
              </ul>
            </div>{" "}
            <div className="mt-4">
              <div className="h5">Recently wishlisted</div>
              <ul class="list-group">
                <li class="list-group-item p-2">
                  <Recentlywishlisted />
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <PriceCart />
          </Col>
        </Row>
      </Container>
    </>
  );
}
