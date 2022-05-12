import { FaLock } from "react-icons/fa";

export default function CreditCard() {
  return (
    <div className="card border bg-light shadow-sm my-6 CreditCard">
      <div className="card-body p-4">
        <div className="form-floating mb-3 ">
          <input
            type="email"
            className="form-control border border-secondary"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Name of Card</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control border border-secondary"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Card Number</label>
        </div>
        <div className="row g-4 mb-3">
          <div className="col-md ">
            <div className="row g-0">
              <div className="col-md ">
                <select
                  className="form-select py-3 border border-secondary bg-white border border-secondary  rounded-0 shadow-sm"
                  name="cars"
                  id="MostPopular"
                >
                  <option value="">MM</option>
                  <option value="">01</option>
                  <option value="">02</option>
                </select>
              </div>
              <div className="col-md ">
                <select
                  className="form-select py-3 border border-secondary bg-white border border-secondary  rounded-0 shadow-sm"
                  name="cars"
                  id="MostPopular"
                >
                  <option value="">YYYY</option>
                  <option value="">1900</option>
                  <option value="">1901</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md form-floating">
            <input
              type="email"
              className="form-control border border-secondary"
              id="floatingInput"
              placeholder="Security Code"
            />
            <label for="floatingInput" className="ps-4">
              Security Code
            </label>
          </div>
        </div>
        <div class="form-check mt-4">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexCheckChecked">
            Remember this card
          </label>
        </div>

        <div className="d-flex justify-content-end align-items-center float-right">
          <span>
            <FaLock size={25} />
          </span>
          <span className="ms-2 text-muted d-inline-flex">
            <small>
              Secure
              <br />
              Connection
            </small>
          </span>
        </div>
      </div>
    </div>
  );
}
