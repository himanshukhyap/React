import { FaLock } from "react-icons/fa";
export default function Wallet() {
  return (
    <div className="card border bg-light shadow-sm my-6 Wallet">
      <div className="card-body p-4">
        <div>
          <p>
            In order to complete your transaction, we will transfer you over to
            Adyen's secure servers.
          </p>
          <p>
            {" "}
            Select your bank from the drop-down list and click proceed to
            continue with your payment.
          </p>
        </div>

        <div className="mb-4">
          <select
            className="form-select w-75 py-3 border border-secondary bg-white border border-secondary  rounded-0 shadow-sm"
            name="cars"
            id="MostPopular"
          >
            <option value disabled>
              Please choose one
            </option>
            <option value="AZP_DIRECT">Amazon Pay</option>
            <option value="ATL_DIRECT">Airtel Money</option>
            <option value="FRW_DIRECT">FreeCharge Wallet</option>
            <option value="MBK_DIRECT">Mobikwik</option>
            <option value="PHW_DIRECT">PhonePe Wallet</option>
          </select>
        </div>

        <div className="d-flex justify-content-end align-items-center">
          <span>
            <FaLock size={25} />
          </span>
          <span className="ms-2 text-muted d-inline-flex ">
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
