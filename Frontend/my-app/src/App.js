import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';
import Signin from './Component/Button3/Button3';
import CustomerSignin from './Component/Auth/signin';
import Admin from './Component/Button4/Button4';
import PaymentCheckout from './Component/Payment/Confirmation';

import Reset from './Component/Auth/resetpassword';

import ViewDesign from './Page';


import Navbar from './Component/Nav/Navbar';
import CDetails from './Get2/Get2';

import Shops from './Get';
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
import NewDesignDetails from './Component/AdminUpload/NewDesignDetail';

import WoodColor from './Component/Design/WoodColor';
import DesignStepper from './Component/Design/DesignStepper';
import WoodNameColor from './Component/Design/WoodNameColor';
import BranchDistanceDuration from './Component/Design/BranchDistanceDuration';
import Duration from './Component/Design/Duration';
import PersonDetails from './Component/Design/PersonDetails';

import Viewmore from './Component/viewmore/Viewmore';
import Adminnote from './Component/Admin/note';

//import EmployeeList from './Component/Trial2/EmployeeList';
//import RandomNu from './Component/Trial2/RandomNu';
//import ProductList from './Component/Trial2/ProductList';
import UploadDesignImage from './Component/Design/UploadDesignImageList';
//import { UserForm } from './Component/Trial/UserForm';

import CarouselContainer from './Component/Help/CarouselContainer';
import HelpAudio from './Component/Help/HelpAudio';
import ManageProduct from './Component/AdminProduct/ManageProduct';
import ManageNewDesign from './Component/AdminProduct/ManageNewDesign';
import ManageDesignImage from './Component/AdminProduct/ManageDesignImage';



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

        <Route path ='/CDetails' component={CDetails} />

        
        <Route exact path='/newdesign' component={UploadNewDesign} />
        <Route path = '/footerdesign' component={FooterDesign} />
        <Route path ='/shops' component={Shops} />
        <Route path ='/admin' component={Admin} />
        <Route path ='/woodcolor' component={WoodColor} />
        <Route path ='/designstepper' component={DesignStepper} />
        <Route path ='/woodnamecolor' component={WoodNameColor} />
        <Route path ='/branchdistanceduration' component={BranchDistanceDuration} />
        <Route path ='/duration' component={Duration} />
        <Route path ='/persondetails' component={PersonDetails} />
        
      


        <Route exact path='/ViewDesign' component={ViewDesign} />
        
        <Route path='/' exact component={Homepage} />
        
          
        <Route path='/admin-note' component={Adminnote} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/card1' component={Card1} />
          <Route path='/card2' component={Card2} />
          <Route path='/cardmini1' component={Cardmini1} />
          <Route path='/cardmini2' component={Cardmini2} />
          <Route path='/cardmini3' component={Cardmini3} />
          <Route path='/cardmini4' component={Cardmini4} />
          
          
          <Route path='/sign-in' component={Signin} />
          <Route path='/customer-sign-in' component={CustomerSignin } />
          
          <Route exact path='/signin' component={Signin} />
          <Route path='/viewmore' component={Viewmore}/>
          <Route path='/NewDesignDetails' component={NewDesignDetails}/> 
          {/* <Route exact path='/cart' component={Cart} />
          


          <Route path='/productlist' component={ProductList} /> */}
          <Route path='/designimagelist' component={UploadDesignImage} />
          <Route path='/CarouselContainer' component={CarouselContainer} />
          <Route path='/HelpAudio' component={HelpAudio} />
          <Route path='/manageproduct' component={ManageProduct} /> 
          <Route path='/managenewdesign' component={ManageNewDesign} /> 
          <Route path='/managedesignimage' component={ManageDesignImage} /> 
          
          
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

