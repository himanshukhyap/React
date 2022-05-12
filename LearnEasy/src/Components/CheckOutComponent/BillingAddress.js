import CreditCard from "./CreditCard";
import NetBanking from "./NetBanking";
import Upi from "./Upi";
import Wallet from "./Wallet";
import { FaLock } from "react-icons/fa";
import "./OrderDetailsComponent.css";

export default function BillingAddress() {
  return (
    <>
      <div className=" my-3 BillingAddress">
        <p className="mb-1">Billing Address</p>

        <div className="row g-5">
          <div className="col-sm-6">
            <select
              className="form-select py-3 border border-secondary bg-white fw-bold  rounded-0 shadow-sm"
              name="cars"
              id="MostPopular"
            >
              <option value="">Country</option>
              <option value="">India</option>
              <option value="">Pakistan</option>
            </select>
          </div>
          <div className="col-sm-6">
            <select
              className="form-select py-3 border border-secondary bg-white fw-bold  rounded-0 shadow-sm"
              name="cars"
              id="MostPopular"
            >
              <option value="">State</option>
              <option value="">Rajasthan</option>
              <option value="">Himachal Pradesh</option>
            </select>
          </div>
        </div>
        <div className="d-grid gap-3 mt-4">
          <div className="form-check">
            <input
              className="form-check-input aa"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              <span> Credit or Debit Card</span>
              <span className="ms-2">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v8/card-mastercard.svg"
                  alt="MasterCard"
                  width="44"
                  height="20"
                  className="checkout--sc-card-box__image--A5ssB"
                />
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v8/card-visa.svg"
                  alt="MasterCard"
                  width="44"
                  height="20"
                  className="checkout--sc-card-box__image--A5ssB"
                />{" "}
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v8/card-amex.svg"
                  alt="MasterCard"
                  width="44"
                  height="20"
                  className="checkout--sc-card-box__image--A5ssB"
                />{" "}
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v8/card-rupay.svg"
                  alt="MasterCard"
                  width="44"
                  height="20"
                  className="checkout--sc-card-box__image--A5ssB"
                />{" "}
              </span>
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Pay with Net Banking
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" for="flexRadioDefault3">
              <span> Pay with UPI </span>{" "}
              <span className="ms-2">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v8/hpp-upi.svg"
                  width="44"
                  height="20"
                  alt="..."
                />
              </span>
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label className="form-check-label" for="flexRadioDefault4">
              <span> Pay with PayTM</span>
              <span className="ms-2">
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v8/hpp-paytm.svg"
                  width="44"
                  height="20"
                  alt="..."
                />
              </span>
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault5"
            />
            <label className="form-check-label" for="flexRadioDefault5">
              Pay with Wallets India
            </label>
          </div>
        </div>
      </div>

      <CreditCard />
      <NetBanking />
      <Upi />
      <Wallet />
    </>
  );
}
