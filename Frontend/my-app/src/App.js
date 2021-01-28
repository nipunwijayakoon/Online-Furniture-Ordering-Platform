
import './App.css';

import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import Reset from './Component/Auth/resetpassword';
import ViewDesign from './Component/Design/ViewDesign';
import Navbar from './Component/Nav/Navbar';
import Products from './Component/Products';
import Signup from './Component/Signup';
import Signin from './Component/Auth/signin';
import PaymentCheckout from './Component/Payment/Confirmation';


const App = () => {

  return (
   

    <Router>
         
    
      
        <Navbar />
        <Fragment>
        <Switch>
        
        <Route path='/' exact component={Homepage} />
        <Route exact path='/Checkout' component={PaymentCheckout} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={Signup} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/resetpassword' component={Reset} />
        <Route exact path='/ViewDesign' component={ViewDesign} />
      </Switch>
      
        </Fragment>
        
    </Router>
   

  );

  
}

export default App;
