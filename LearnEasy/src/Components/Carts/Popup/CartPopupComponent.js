export default function CartPopupComponent() {
  return (
    <div className="card flex-row border-0">
      <div>
        <img
          src="https://img-c.udemycdn.com/course/100x100/995016_ebf4_3.jpg"
          className=""
          alt="..."
          height="auto"
          width="70px"
        />
      </div>
      <div className="card-body p-0 ps-2">
        <h6 className="card-title m-0 fw-bold">
          Vue - The Complete Guide (w/ Router, Vuex, Composition API)
        </h6>
        <p className="card-text m-0">
          <small> Maximilian Schwarzmüller</small>
        </p>
        <p className="card-text m-0">
          <span className="fw-bold">₹490</span>
          <span className="ps-2">
            <del>₹5230</del>
          </span>
        </p>
      </div>
    </div>
  );
}
