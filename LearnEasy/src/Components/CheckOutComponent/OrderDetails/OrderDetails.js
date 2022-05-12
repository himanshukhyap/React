import React from "react";

export default function OrderDetails() {
  return (
    <div className="card flex-row border-0 bg-light">
      <div>
        <img
          src="https://img-c.udemycdn.com/course/100x100/995016_ebf4_3.jpg"
          className=""
          alt="..."
          height="auto"
          width="60px"
        />
      </div>
      <div className="card-body p-0 ps-2 row">
        <h6 className="card-title m-0 fw-bold col-md-10">
          Vue - The Complete Guide (w/ Router, Vuex, Composition API)
        </h6>

        <p className="col-md-2 d-grid text-center">
          <span className="fw-bold">₹490</span>
          <span className="text-decoration-line-through">₹5230</span>
        </p>
      </div>
    </div>
  );
}
