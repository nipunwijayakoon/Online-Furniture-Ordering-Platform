
import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';
import SignIn from './Component/Auth/signin';
import PaymentCheckout from './Component/Payment/Confirmation';
import Reset from './Component/Auth/resetpassword';
import ViewDesign from './Component/Design/ViewDesign';
import Navbar from './Component/Nav/Navbar';

import Shops from './Component/Services/Shops';
import Products from './Component/Products';
import Card1 from './Component/Table/Table1';
import Card2 from './Component/Table/Table2';
import Cardmini1 from './Component/Cardmini/Cardmini1';
import Cardmini2 from './Component/Cardmini/Cardmini2';
import Cardmini3 from './Component/Cardmini/Cardmini3';
import Cardmini4 from './Component/Cardmini/Cardmini4';






const App = () => {

  return (
   

    <Router>
         
    
      
        <Navbar />
        <Fragment>
        <Switch>
        <Route exact path='/signup' component={SignUp} />
      
        <Route exact path='/signin' component={SignIn} />

        <Route exact path='/Checkout' component={PaymentCheckout} />
        <Route exact path='/resetpassword' component={Reset} />
        
        
        
        
       
        <Route exact path='/ViewDesign' component={ViewDesign} />
        
        <Route path='/' exact component={Homepage} />
        <Route path='/services' component={Shops} />
          <Route path='/products' component={Products} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/card1' component={Card1} />
          <Route path='/card2' component={Card2} />
          <Route path='/cardmini1' component={Cardmini1} />
          <Route path='/cardmini2' component={Cardmini2} />
          <Route path='/cardmini3' component={Cardmini3} />
          <Route path='/cardmini4' component={Cardmini4} />
      </Switch>
      
        </Fragment>
        
    </Router>
    

    

         
        
       


  );

  
}

export default App;
