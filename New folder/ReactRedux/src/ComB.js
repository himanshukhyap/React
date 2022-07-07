import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { decrement, Increment } from "./Redux/Action";

export default function ComB() {
  const dispatch = useDispatch();

 
  return (
    <>
      <button
        className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
        onClick={() => dispatch(decrement())}
      >
        <span className="fw-bold fs-4">-</span>
      </button>

      <button
        className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
        onClick={() => dispatch(Increment())}
      >
        <span className="fw-bold fs-4">+</span>
      </button>
     
    </>
  );
}
