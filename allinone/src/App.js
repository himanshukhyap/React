// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Axiom from './AXIOS/Axiom';
// import Filterdata from './DataFilter/Filterdata';
// import Input from './Form/Input';
// import InputDelete from './Input and Delete by Click/InputDelete';
// import Time from './project/time/Time';
// import Main from './React_Hook_Form/Main';
// import IndexRedux from './Redux/IndexRedux';
// import Store from './Redux/Store';
// import Use_Ref from './USE Ref/Use_Ref';
// import Reducer from './Used Reducer/Reducer';
// import Effect from './UseEffect/Effect';
// import UseMemo from './UseMemo/UseMemo';
// import IndexComponent from './Use_Context/IndexComponent';

import GoogleLogin from "./Firebase/GoogleLogin";
import './App.css';
import Dashboard from "./Firebase/Dashboard";

function App() {
  
  return (
    <div className="container">
      <>
      <Router>
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      </>
    </div>
  );
}

export default App;
