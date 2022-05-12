import { Container } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import BillingAddress from "../../Components/CheckOutComponent/BillingAddress";
import CreditCard from "../../Components/CheckOutComponent/CreditCard";
import NetBanking from "../../Components/CheckOutComponent/NetBanking";
import OrderDetails from "../../Components/CheckOutComponent/OrderDetails/OrderDetails";
import Upi from "../../Components/CheckOutComponent/Upi";
import Wallet from "../../Components/CheckOutComponent/Wallet";
import CheckOutSummary from "../../Components/CheckOutComponent/CheckOutSummary/CheckOutSummary";
import "./CheckOut.css";

export default function CheckOut() {
  return (
    <div className="bg-light CheckOut">
      <Container>
        <div className="row pt-5">
          <div className="col-md-7">
            <h1 className="h1 fw-bold">Checkout</h1>
            <BillingAddress />

            <div className="my-5">
              <h2 className="fw-bold mb-3">Order Details</h2>
              <div className="d-grid gap-5">
                <OrderDetails />
                <OrderDetails />
                <OrderDetails />
                <OrderDetails />
              </div>
            </div>
          </div>{" "}
          <div className="col-md-5">
            <CheckOutSummary />
          </div>
        </div>
      </Container>
    </div>
  );
}
