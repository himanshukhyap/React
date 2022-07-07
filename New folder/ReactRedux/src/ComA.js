import { useSelector } from "react-redux";

export default function ComA() {
 
  return (
    <>
      <input
        name="quantity"
        type="text"
        className="py-2 border px-3 bg-light text-dark text-center shadow"
         readOnly
      />
    </>
  );
}
