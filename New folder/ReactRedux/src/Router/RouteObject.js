import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GetTaskList } from "../API/Api";
import AfterLogin from "../Component/AfterLogin/AfterLogin";
import Login from "../Component/Login/Login";
import Registration from "../Component/Login/Registration";
import PublicLayOut from "../Component/PublicComponent/PublicLayOut";
import { LoaderAction } from "../Redux/Actions/LoaderAction";

function RequireAuth({ children }: { children: JSX.Element }) {

    if (sessionStorage.getItem("UserLogin") == "null" || sessionStorage.length==0 ) {
    
      return <Navigate to="/Login" replace />;
    }
   
    return children;
  }
  function LoginTrue({ children }: { children: JSX.Element }) {
    
    const UserStatus = useSelector((state:any) => state.UserReducer);
    if (UserStatus ==false) {
        Swal.fire('Invalid Credential')
    }
    if (sessionStorage.getItem("UserLogin") != "null" && sessionStorage.length!=0) {
      
      return <Navigate to="/Task" replace />;
    }
    return children;
  }
export const routeObject = [
    {
      path: "/",
      element: <PublicLayOut />,
      children: [
        { index: true, element: <LoginTrue><Login /></LoginTrue> },
        {
          path: "/Registration",
          element: <Registration />
        },

        {
          path: "/Login",
          element: <LoginTrue><Login /></LoginTrue>
        }
      ]
    },
    { path: "*", element: <p>There's nothing here!</p> },
    {
      path: "/Task", element: (<RequireAuth><AfterLogin /></RequireAuth>)
    }
  ];