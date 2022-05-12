import { FaLock } from "react-icons/fa";

export default function Upi() {
  return (
    <div className="card border bg-light shadow-sm my-6 Upi">
      <div className="card-body p-4">
        <div>
          <p>
            In order to complete your transaction, we will transfer you over to
            Adyen's secure servers.
          </p>
        </div>
        <div className="d-flex justify-content-end align-items-center mt-4">
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
