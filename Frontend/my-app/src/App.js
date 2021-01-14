import logo from './logo.svg';
import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';

const App = () => {

  return (

    <Router>
      
        <Fragment>
        <Switch>
      <Route exact path="/" component={Homepage} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
        </Fragment>
      
    </Router>



  );
}

export default App;
