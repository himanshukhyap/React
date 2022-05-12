import { GiShoppingCart } from "react-icons/gi";
import "./CoursesInCart.css";

export default function CoursesInCart() {
  return (
    <div className="card border-0 CoursesInCart w-100">
      <div className="row">
        <div className="col-md-2">
          <img
            src="https://img-c.udemycdn.com/course/240x135/1329100_571a.jpg"
            className="img-fluid hw-50"
            alt="..."
          />
        </div>
        <div className="col-md-10">
          <div className="d-flex row">
            <div className=" col-7 ps-1 pe-1 ">
              <h5 className="card-text fw-bold m-0">
                Progressive Web Apps (PWA) - The Complete Guide
              </h5>
              <span>
                <small>
                  By Maximilian Schwarzmüller, Professional Web Developer and
                  Instructor
                </small>
              </span>
            </div>
            <div className="col-3 d-grid text-end g-0 pe-2 ">
              <a href="" className="text-decoration-none">
                Remove
              </a>
              <a href="" className="text-decoration-none">
                Safe for Later
              </a>
              <a href="" className="text-decoration-none">
                Move to Wishlist
              </a>
            </div>
            <div className="col-2 d-flex justify-content-end pe-2 ">
              <div className="d-grid mb-auto">
                <div className="fw-bold">
                  <span>₹490</span>
                  <span className="ms-2">
                    <GiShoppingCart size={20} />
                  </span>
                </div>
                <div>
                  <span className="fw-bold text-decoration-line-through">
                    ₹5,120
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
