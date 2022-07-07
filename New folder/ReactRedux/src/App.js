
import { RouteObject, useRoutes } from "react-router-dom";
import LoaderStatusCom from "./Loader/LoaderStatusCom";

import { routeObject } from "./Router/RouteObject";


export default function App() {


  let routes: RouteObject[] = routeObject
  let element:any = useRoutes(routes);


  return (
    <div className="App">
      <LoaderStatusCom >  
        {element}
      </LoaderStatusCom>
    </div>
  );
}
