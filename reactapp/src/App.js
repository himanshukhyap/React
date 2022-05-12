import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import uuid from 'react-uuid'
import PublicLayOut from './LayOut/PublicLayOut';
import AdminLayOut from './LayOut/AdminLayOut';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Link to="/admin">Admin new</Link>

        <Switch>
          <Route exact={false} path="/admin" >
            <AdminLayOut />
          </Route>
          <Route exact={true} path="" component={PublicLayOut} />
        </Switch>
      </BrowserRouter>

    </div>
  );

}

export default App;
