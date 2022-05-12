import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import Axiom from './AXIOS/Axiom';
import Filterdata from './DataFilter/Filterdata';
import Input from './Form/Input';
import InputDelete from './Input and Delete by Click/InputDelete';
import Time from './project/time/Time';
import Main from './React_Hook_Form/Main';
import IndexRedux from './Redux/IndexRedux';
import Store from './Redux/Store';
import Use_Ref from './USE Ref/Use_Ref';
import Reducer from './Used Reducer/Reducer';
import Effect from './UseEffect/Effect';
import UseMemo from './UseMemo/UseMemo';
import IndexComponent from './Use_Context/IndexComponent';

function App() {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link exact as={Link} to="/" >Time</Nav.Link>
              <Nav.Link exact as={Link} to="/Input"  >Input</Nav.Link>
              <Nav.Link exact as={Link} to="/Use_Effect"  >Effect</Nav.Link>
              <Nav.Link exact as={Link} to="/Filterdata" >Filterdata</Nav.Link>
              <Nav.Link exact as={Link} to="/UseContext" >Use_Context</Nav.Link>
              <Nav.Link exact as={Link} to="/AXIOS" >AXIOS</Nav.Link>
              <Nav.Link exact as={Link} to="/Input_Delete" >Input_Delete</Nav.Link>
              <Nav.Link exact as={Link} to="/Reducer" >Reducer</Nav.Link>
              <Nav.Link exact as={Link} to="/Redux" >Redux</Nav.Link>
              <Nav.Link exact as={Link} to="/React_Hook_Form" >React_Hook_Form</Nav.Link>
              <Nav.Link exact as={Link} to="/Use_ref" >Use_ref</Nav.Link>
              <Nav.Link exact as={Link} to="/Use_Memo" >Use_Memo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Time}></Route>
        <Route exact path="/Input" component={Input}></Route>
        <Route exact path="/Use_Effect" component={Effect}></Route>
        <Route exact path="/Filterdata" component={Filterdata}></Route>
        <Route exact path="/UseContext" component={IndexComponent}></Route>
        <Route exact path="/AXIOS" component={Axiom}></Route>
        <Route exact path="/Input_Delete" component={InputDelete}></Route>
        <Route exact path="/Reducer" component={Reducer}></Route>

        <Route exact path="/Redux" render={() => {
          return (<Provider store={Store}>
            <IndexRedux />
          </Provider>
          )
        }
        } ></Route>
         <Route exact path="/React_Hook_Form" component={Main}></Route>
         <Route exact path="/Use_ref" component={Use_Ref}></Route>
         <Route exact path="/Use_Memo" component={UseMemo}></Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
