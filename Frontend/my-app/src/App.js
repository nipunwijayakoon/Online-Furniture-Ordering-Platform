
import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';
import ViewDesign from './Component/Design/ViewDesign';
import Navbar from './Component/Nav/Navbar';

import Services from './Component/Services';
import Products from './Component/Products';
import Signup from './Component/Signup';


const App = () => {

  return (

    
      <Router>
        <Navbar />
        <Fragment>
        <Switch>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/ViewDesign' component={ViewDesign} />
        
        <Route path='/' exact component={Homepage} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={Signup} />
      </Switch>
        </Fragment>
      
    </Router>

         
        
       


  );
}

export default App;
