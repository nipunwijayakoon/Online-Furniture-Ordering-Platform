import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
//import SignUp from './Component/Auth/signup';
import Signin from './Component/Auth/signin';

import PaymentCheckout from './Component/Payment/Confirmation';

import Reset from './Component/Auth/resetpassword';

import ViewDesign from './Page';

import Navbar from './Component/Nav/Navbar';

import Products from './Component/Products';
//import Signin from './Component/Signin';
import Signup from './Component/Signup';

import Viewmore from './Component/viewmore/Viewmore';

import UploadNewDesign from './Component/Design/UploadNewDesign';
import NewDesignDetails from './Component/AdminUpload/NewDesignDetail';



const App = () => {
  

  return (
   

    <Router>
         
    
      
        <Navbar />
        <Fragment>
        <Switch>
        {/*<Route exact path='/signup' component={SignUp} />*/}
      
        <Route exact path='/signin' component={Signin} />

        <Route exact path='/Checkout' component={PaymentCheckout} />
        <Route exact path='/resetpassword' component={Reset} />
        
        
        <Route exact path ='/newdesign' component ={UploadNewDesign}/>
        
        
       
        <Route exact path='/ViewDesign' component={ViewDesign} />
        
        <Route path='/' exact component={Homepage} />
          
          <Route path='/products' component={Products} />
          <Route path='/sign-in' component={Signin} />
          <Route path='/sign-up' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <Route path='/viewmore' component={Viewmore}/>
          <Route path='/NewDesignDetails' component={NewDesignDetails}/>   

      </Switch>
      
        </Fragment>
        
    </Router>
    

    

         
        
       


  );

  
}

















//import React from 'react';
//import {BrowserRouter as Router} from 'react-router-dom'
//import Header from './Component/Header'
//import Section from './Component/Section'
//import {DataProvider} from './Component/Context'


//class App extends React.Component{
  //render(){
  // return(
    //  <DataProvider>
    //    <div className="app">
    //      <Router>
     //       <Header />
     //       <Section />
     //     </Router>
    //    </div>
    //  </DataProvider>
   // );
  //}
//}

export default App;

