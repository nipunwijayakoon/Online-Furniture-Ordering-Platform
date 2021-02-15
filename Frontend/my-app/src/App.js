import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';
import Signin from './Component/Auth/signin';

import PaymentCheckout from './Component/Payment/Confirmation';

import Reset from './Component/Auth/resetpassword';

import ViewDesign from './Page';

import Navbar from './Component/Nav/Navbar';


//import Shops from './Component/Services/Shops';
//import Products from './Component/Products';
import Card1 from './Component/Table/Table1';
import Card2 from './Component/Table/Table2';
import Cardmini1 from './Component/Cardmini/Cardmini1';
import Cardmini2 from './Component/Cardmini/Cardmini2';
import Cardmini3 from './Component/Cardmini/Cardmini3';
import Cardmini4 from './Component/Cardmini/Cardmini4';

//import Products from './Component/Products';
//import Signin from './Component/Signin';
//import Signup from './Component/Signup';
import FooterDesign from './Component/FooterDesign';



import UploadNewDesign from './Component/Design/UploadNewDesign';


import WoodColor from './Component/Design/WoodColor';
import DesignStepper from './Component/Design/DesignStepper';
import WoodName from './Component/Design/WoodName';
import SelectingBranch from './Component/Design/SelectingBranch';
import Duration from './Component/Design/Duration';
import PersonDetails from './Component/Design/PersonDetails';

import Viewmore from './Component/viewmore/Viewmore';





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



        
        <Route exact path='/newdesign' component={UploadNewDesign} />
        <Route path = '/footerdesign' component={FooterDesign} />


        <Route path ='/woodcolor' component={WoodColor} />
        <Route path ='/designstepper' component={DesignStepper} />
        <Route path ='/woodname' component={WoodName} />
        <Route path ='/selectingbranch' component={SelectingBranch} />
        <Route path ='/duration' component={Duration} />
        <Route path ='/persondetails' component={PersonDetails} />
        
      


        <Route exact path='/ViewDesign' component={ViewDesign} />
        
        <Route path='/' exact component={Homepage} />
        
          
          
          <Route path='/sign-up' component={SignUp} />
          <Route path='/card1' component={Card1} />
          <Route path='/card2' component={Card2} />
          <Route path='/cardmini1' component={Cardmini1} />
          <Route path='/cardmini2' component={Cardmini2} />
          <Route path='/cardmini3' component={Cardmini3} />
          <Route path='/cardmini4' component={Cardmini4} />
          
          
          <Route path='/sign-in' component={Signin} />
          
          <Route exact path='/signin' component={Signin} />
          <Route path='/viewmore' component={Viewmore}/>



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

