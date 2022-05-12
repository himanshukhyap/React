import { Accordion, Card, Col, Row } from "react-bootstrap";
import { BiFilter } from "react-icons/bi";
import { IoIosAlert } from "react-icons/io";
import DevelopmentCard from "../../Components/Carts/DevelopmentCourseCard/DevelopmentCard/DevelopmentCard";
import Feature from "../../OtherComponents/FIlters/Feature";
import Rating from "../../OtherComponents/FIlters/Rating";
import "./SearchPage.css";
export default function SearchPage() {
  return (
    <div className="container-fluid mt-4 px-5 bg-light">
      <div className="h1 fw-bold">10,000 results for “test”</div>
      <div className="card border mt-4">
        <div className="card-body">
          <span>
            <IoIosAlert size={30} />
          </span>{" "}
          <span className="ps-2 fw-bold">
            Not sure? All courses have a 30-day money-back guarantee
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex">
          <button className="border border-secondary px-3 bg-light fw-bold">
            <span>
              <BiFilter size={25} />
            </span>
            <span className="ms-2">Filter</span>
          </button>

          <form action="">
            <select
              className="form-select px-4 py-3 ms-4 border border-secondary bg-light fw-bold MostPopularButton"
              name="cars"
              id="MostPopular"
            >
              <option value="">Most Popular</option>
              <option value="">Highest Rated</option>
              <option value="">Newest</option>
            </select>
          </form>
        </div>{" "}
        <span>10,000 results</span>
      </div>
      <Row className="mt-4">
        <Col sm={3} className="">
          <Accordion className="AccordionCoursePage">
            <ul className="list-group ">
              <li className="list-group-item border-start-0 border-end-0 ps-0 pe-0 py-3">
                <Accordion.Item eventKey="0" className="border-0 ">
                  <Feature />
                </Accordion.Item>
              </li>
              <li className="list-group-item border-start-0 border-end-0 ps-0 pe-0 py-3">
                <Accordion.Item eventKey="1" className="border-0 ">
                  <Rating />
                  <Accordion.Body className="pt-3 pb-3 ps-0 pe-0"></Accordion.Body>
                </Accordion.Item>
              </li>
            </ul>
          </Accordion>
        </Col>
        <Col sm={9}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item pb-4">
              {" "}
              <DevelopmentCard />
            </li>
            <li className="list-group-item pb-0 py-4">
              {" "}
              <DevelopmentCard />
            </li>
            <li className="list-group-item pb-0 py-4">
              {" "}
              <DevelopmentCard />
            </li>
            <li className="list-group-item pb-0 py-4">
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
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
