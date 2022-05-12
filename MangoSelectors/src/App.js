import React from 'react';

import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Mango from './Mango';
import Login from './Login';

function App() {
  return (
    <>
     <div className='container'>
      <Router>
      
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/Mango" component={Mango}></Route>
        </Switch>
      </Router>


    </div>
    </>
  );




}

export default App;
