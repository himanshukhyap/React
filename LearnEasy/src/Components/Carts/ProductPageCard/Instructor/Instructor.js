import React from "react";
import ReactIcon from "../../../../ReactIcon/ReactIcon";
import "./Instructor.css";
export default function Instructor() {
  return (
    <div>
      <div classNameName="card">
        <div className="card-body p-0 border-0">
          <h4 className="card-text fw-bold mb-3">Instructor</h4>
          <h5 className="card-text mb-3">
            <a
              className="text-decoration-none fw-bolder border-bottom pb-1   "
              href=""
            >
              Jose Portilla
            </a>
          </h5>

          <p className="card-text mb-1">
            Head of Data Science, Pierian Data Inc.
          </p>
          <div className="card mb-3 border-0">
            <div className="row no-gutters">
              <div className="col-md-2">
                <img
                  src="https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg"
                  className="rounded-circle w-100"
                  alt="..."
                />
              </div>
              <div className="col-md-10">
                <div className="card-body p-0">
                  <p className="card-text m-1">
                    <sapn className="pe-2">{ReactIcon.fillstar}</sapn>
                    <span>4.6 Instructor Rating</span>
                  </p>
                  <p className="card-text m-1">
                    <sapn className="pe-2">{ReactIcon.fillcertificate}</sapn>
                    <span>792,147 Reviews</span>
                  </p>
                  <p className="card-text m-1">
                    <sapn className="pe-2">{ReactIcon.fillpeople}</sapn>
                    <span>2,451,501 Students</span>
                  </p>
                  <p className="card-text m-1">
                    <sapn className="pe-2">{ReactIcon.fillplay}</sapn>
                    <span>33 Courses</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="card-text">
            {" "}
            Jose Marcial Portilla has a BS and MS in Mechanical Engineering from
            Santa Clara University and years of experience as a professional
            instructor and trainer for Data Science and programming. He has
            publications and patents in various fields such as microfluidics,
            materials science, and data science technologies. Over the course of
            his career he has developed a skill set in analyzing data and he
            hopes to use his experience in teaching and data science to help
            other people learn the power of programming the ability to analyze
            data, as well as present the data in clear and beautiful
            visualizations. Currently he works as the Head of Data Science for
            Pierian Data Inc. and provides in-person data science and python
            programming training courses to employees working at top companies,
            including General Electric, Cigna, The New York Times, Credit
            Suisse, McKinsey and many more. Feel free to contact him on LinkedIn
            for more information on in-person training sessions or group
            training sessions in Las Vegas, NV.
          </p>
        </div>
      </div>
    </div>
  );
}
