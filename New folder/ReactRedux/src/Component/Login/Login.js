
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Auth } from "../../API/Api";
import { EmailIcon, FacebookIcon, GoogleIcon, LockIcon } from "../../Assest/Icon";
import { LoaderAction } from "../../Redux/Actions/LoaderAction";
import { GetAuth } from "../../Redux/Actions/UserAction";

import "./Login.css";
export default function Login() {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    Auth(dispatch, data)
  }
 
  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Login">
          <div className="my-4 card m-auto border-0" style={{ width: "450px" }}>
            <div className="card-body">
              <div className="border-bottom">
                <div className="h5 py-4 px-4  text-left d-flex fw-bold">
                  Log In to Your To-Do Account!
                </div>
              </div>
              <div className="d-grid gap-3  p-4">
                <div>
                  <button
                    className="border py-3 w-100 text-start text-white fw-bold shadow"
                    style={{ backgroundColor: "#1a538a" }}
                  >
                    <span className="ms-2">
                      {FacebookIcon}
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
                      {GoogleIcon}
                    </span>
                    <span className="ms-3">Continue with Google</span>
                  </button>
                </div>

                <div className="input-group flex-nowrap border border-secondary shadow">
                  <span className="border-0 input-group-text bg-white">
                    {" "}
                    {EmailIcon}
                  </span>
                  <input  {...register("Username", { required: true })}
                    className="border-0 py-3 w-100 ps-2 text-muted text-dark fw-bold"
                    placeholder="User Name"
                  />
                  {errors.Email && <span>This field is required</span>}
                </div>
                <div className="input-group flex-nowrap border border-secondary shadow">
                  <span className="border-0 input-group-text bg-white">
                    {" "}
                    {LockIcon}
                  </span>
                  <input {...register("password", { required: true })}
                    className="border-0 py-3 w-100 ps-2 text-muted text-dark fw-bold"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div>
                  <button type="submit" className="border py-3 w-100 fw-bold shadow bg-dark text-white">
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
                      <Link className="text-decoration-none fw-bold" to="/Registration">
                        Sign up
                      </Link>
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
  

  );
}
