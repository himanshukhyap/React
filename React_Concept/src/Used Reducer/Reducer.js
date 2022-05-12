import React, { useReducer } from "react";


export default function Reducer() {

    // console.log("re render reducer")

    // Reducer..................................Start
  const Reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  // Reducer..................................End



//   Action...........................................Start

  const increment = () => {
    return {
      type: "increment"
    };
  };
  const decrement = () => {
    return {
      type: "decrement"
    };
  };

//   Action...........................................End


// Index..............................................................


  const [state, dispatch] = useReducer(Reducer, 0);
  console.log(useReducer)
  return (
    <div className="container d-flex justify-content-center mt-5 ">
      <button
        href=""
        className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
        onClick={() => dispatch(decrement())}
      >
        <span className="fw-bold fs-4">-</span>
      </button>
      <input
        name="quantity"
        type="text"
        className="py-2 border px-3 bg-light text-dark text-center shadow"
        value={state}
      />
      <button
        className="py-2 border px-3 bg-dark text-white text-decoration-none shadow"
        onClick={() => dispatch(increment())}
      >
        <span className="fw-bold fs-4">+</span>
      </button>
    </div>
  );
}
