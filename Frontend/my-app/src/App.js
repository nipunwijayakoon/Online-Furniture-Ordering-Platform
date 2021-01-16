import logo from './logo.svg';
import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';
import SignIn from './Component/Auth/signin';
import PaymentCheckout from './Component/Payment/Confirmation';
import Reset from './Component/Auth/resetpassword';


const App = () => {

  return (
   

    <Router>
         
        <Fragment>
        <Switch>
      <Route exact path="/" component={Homepage} />
        <Route exact path='/signup' component={SignUp} />
      
        <Route exact path='/signin' component={SignIn} />

        <Route exact path='/Checkout' component={PaymentCheckout} />
        <Route exact path='/resetpassword' component={Reset} />
        
        
        
        
       
      </Switch>
      
        </Fragment>
        
    </Router>
    

    



  );

  function App(){
    return(
      <div className='App'>
        <h1>Furniture</h1>
      </div>
    )
  }
}

export default App;
