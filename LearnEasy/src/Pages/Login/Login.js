import { AiFillApple } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "./Login.css";
export default function Login() {
  return (
    <div className="Login">
      <div class="my-4 card m-auto border-0" style={{ width: "450px" }}>
        <div className="card-body">
          <div className="border-bottom">
            <div className="h5 py-4 px-4  text-left d-flex fw-bold">
              Log In to Your Udemy Account!
            </div>
          </div>
          <div className="d-grid gap-3  p-4">
            <div>
              <button
                className="border py-3 w-100 text-start text-white fw-bold shadow"
                style={{ backgroundColor: "#1a538a" }}
              >
                <span className="ms-2">
                  <ImFacebook size={25} />
                </span>
                <span className="ms-3">Continue with Facebook</span>
              </button>
            </div>
            <div>
              <button
                className="border py-3 w-100 text-start text-dark fw-bold bg-light shadow"
                style={{ backgroundColor: "#1a538a" }}
              >
                <span className="ms-2">
                  <FaGoogle size={25} />
                </span>
                <span className="ms-3">Continue with Google</span>
              </button>
            </div>
            <div>
              <button className="border py-3 w-100 text-start text-dark fw-bold bg-light shadow">
                <span className="ms-2">
                  <AiFillApple size={25} />
                </span>
                <span className="ms-3">Continue with Apple</span>
              </button>
            </div>
            <div className="input-group flex-nowrap border border-secondary shadow">
              <span className="border-0 input-group-text bg-white">
                {" "}
                <MdEmail size={23} />
              </span>
              <input
                className="border-0 py-3 w-100 ps-2 text-muted text-dark fw-bold"
                placeholder="Email"
              />
            </div>
            <div className="input-group flex-nowrap border border-secondary shadow">
              <span className="border-0 input-group-text bg-white">
                {" "}
                <RiLockPasswordFill size={23} />
              </span>
              <input
                className="border-0 py-3 w-100 ps-2 text-muted text-dark fw-bold"
                placeholder="Password"
                type="password"
              />
            </div>
            <div>
              <button className="border py-3 w-100 fw-bold shadow bg-dark text-white">
                Login
              </button>
            </div>
            <div className="card-text text-center">
              <div>
                <span>or</span>
                <span className="ms-2 ">
                  <a className="text-decoration-none fw-bold" href="">
                    Forgot Password
                  </a>
                </span>
              </div>
              <div className="mt-4">
                <span>Don't have an account?</span>
                <span className="ms-2 ">
                  <a className="text-decoration-none fw-bold" href="">
                    Sign up
                  </a>
                </span>
              </div>
              <div className="mt-2">
                <span className="">
                  <a className="text-decoration-none fw-bold" href="">
                    Log in with your organization
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
