import { MdClose } from "react-icons/md";
import "./PriceCart.css";

export default function PriceCart() {
  return (
    <div className="card border-0">
      <div className="card-body">
        <div className="d-grid">
          <div className="text-decoration-line-through text-end">₹26,880</div>
          <div className="d-flex justify-content-between">
            <span>Total:</span>
            <span className="h4 fw-bold ">₹2,940</span>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <span>Total Savings (89%):</span>
            <span className="">-₹23,940</span>
          </div>
          <button className="mt-4 pt-3 pb-3 bg-dark text-white border-0 fw-bold PriceCartButton">
            Checkout
          </button>
        </div>
        <div>
          <div className="fw-bold mt-3">Promotions</div>
          <div className="d-flex justify-content-between">
            <div className="mt-2">
              <span>
                <MdClose />
              </span>
              <span className="text-muted ms-2">LIBMT90621A</span>
            </div>
            <div>
              <span className="">-₹23,940</span>
            </div>
          </div>
          <form className="d-flex mt-4">
            <input
              className="w-100 border border-secondary py-2 ps-2 "
              placeholder="Enter Coupon"
            />
            <button
              className="border border-secondary px-4 py-2 bg-dark text-white fw-bold"
              type="submit"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
