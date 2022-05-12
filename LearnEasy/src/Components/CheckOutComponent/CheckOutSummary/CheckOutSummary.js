export default function CheckOutSummary() {
  return (
    <div className="card shadow-sm border p-3">
      <div className="card-body py-0">
        <div className="border-bottom border-dark pb-3">
          <h3 className="fw-bold">Summary</h3>
          <div className="d-grid gap-1">
            <div className="d-flex justify-content-between">
              <span className="fs-5">Original price:</span>
              <span className="text-dark fs-5">₹44,480</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="fs-5">Coupon discounts:</span>
              <span className="text-dark fs-5">₹44,480</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body py-0 mt-1">
        <div className="d-flex justify-content-between">
          <span className="fs-5 fw-bold">Total:</span>
          <span className="text-dark fs-5 fw-bold">₹2,940</span>
        </div>
        <div className="card-text">
          Udemy is required by law to collect applicable transaction taxes for
          purchases made in certain tax jurisdictions.
        </div>
        <div className="card-text mt-4">
          By completing your purchase you agree to these{" "}
          <a href="" className="text-decoration-none fw-bolder">
            Terms of Service.
          </a>
        </div>
        <button className="py-4 mt-3 w-100 border-0 bg-dark text-white fw-bold fs-5">
          Proceed
        </button>
      </div>
    </div>
  );
}
