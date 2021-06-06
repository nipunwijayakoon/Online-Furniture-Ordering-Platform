import './App.css';


import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Homepage from './Component/Home/Homepage';
import SignUp from './Component/Auth/signup';
import Signin from './Component/Button3/Button3';
import CustomerSignin from './Component/Auth/signin';
import Admin from './Component/Button4/Button4';

import Button5 from './Component/Button5/Button5';
import Reset from './Component/Auth/resetpassword';
import asaseller from './Component/Auth/signupseller';
import ViewDesign from './Page';
import App2 from './Component/Hero2/App2';
import Hero3 from './Component/Hero3/Hero3';
import Navbar from './Component/Nav/Navbar';
import CDetails from './Get2/Get2';
import Empdetails from './GetEmp/EmployeeDetails';
import AddEmployee from './GetEmp/AddEmp';
import Linecharts from './Get2/Linechart';
import BuyerSeller from './BuyerSeller/BuyerSeller';
import SellerDetails from './GetSeller/GetSeller';
import SellersellsDetails from './GetSellrtCharts/SellerBarCharts';
import SellerProductDetails from './SellerProduct/SellerProduct';

import Shops from './Component/GetShopdata/Get';
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
import BranchLocationDuration from './Component/Design/BranchLocationDuration';
import DesignConfirm from './Component/Design/DesignConfirm';
import Duration from './Component/Design/Duration';
import PersonDetails from './Component/Design/PersonDetails';

import Viewmore from './Component/viewmore/Viewmore';
import Adminnote from './Component/Admin/note';

import UploadDesignImage from './Component/Design/UploadDesignImageList';


import Cart from './Component/section/Cart';
import About_Us from './Component/AboutUs/About Us';

import { Provider } from "react-redux";
import store from "./store";
import ProductList from './Component/AdminProduct/ProductList';


import CarouselContainer from './Component/Help/CarouselContainer';
import HelpAudio from './Component/Help/HelpAudio';
import ManageProduct from './Component/AdminProduct/ManageProduct';
import ManageNewDesign from './Component/AdminProduct/ManageNewDesign';
import ManageDesignImage from './Component/AdminProduct/ManageDesignImage';
import ManageDesignPayment from './Component/AdminProduct/ManageNewDesignPayments';

import DeleteNotice from './Component/AdminUpload/DeletedNotice';
import NewDesignStatus from './Component/Design/StatusDesign';
import ConfirmNotice from './Component/AdminUpload/ConfirmedNotice';

import Checkout from './Component/Payment/Checkout';
import NewDesignCheckout from './Component/Payment/NewDesignCheckout';
import Receipt from './Component/Payment/Receipt';
import NewDesignReceipt from './Component/Payment/NewDesignReceipt';
import CustomerDetails from './Component/AdminProduct/CustomerDetails';

import CustomerOrderDetail from './Component/AdminProduct/CustomerOrderDetail';

import Search from './Component/section/Products';
import Details from './Component/section/Details';

import Section from './Component/Section';

const App = () => {

  return (
   
    <Provider store={store}>
    <Router>
         
         <Navbar/>
        
        <Fragment>
        <Switch>
        {/*<Route exact path='/signup' component={SignUp} />*/}
      
        <Route exact path='/signin' component={Signin} />

        {/* <Route exact path='/Checkout' component={PaymentCheckout} /> */}
        <Route exact path='/resetpassword' component={Reset} />

        <Route path ='/CDetails' component={CDetails} />
        <Route path = '/Admindetails' component={Empdetails}/>
        <Route path = '/AddAdmin' component={AddEmployee}/>
        <Route path = '/Linecharts' component={Linecharts}/>
        <Route path = '/BuyerSeller' component={BuyerSeller}/>
        <Route path = '/SellerDetails' component={SellerDetails}/>
        <Route path = '/SellersellsDetails' component={SellersellsDetails}/>
        <Route path = '/SellerProductDetails' componet={SellerProductDetails}/>
       


        <Route path ='/choosesignup' component={Button5} />
        <Route exact path='/newdesign' component={UploadNewDesign} />
        <Route path = '/footerdesign' component={FooterDesign} />
        <Route path ='/shops' component={Shops} />
        <Route path ='/admin' component={Admin} />
        <Route path ='/woodcolor' component={WoodColor} />
        <Route path ='/designstepper' component={DesignStepper} />
        <Route path ='/woodnamecolor' component={WoodNameColor} />
        <Route path ='/branchlocationduration' component={BranchLocationDuration} />
        <Route path ='/duration' component={Duration} />
        <Route path ='/persondetails' component={PersonDetails} />
        <Route path ='/designconfirm' component={DesignConfirm} />
        <Route path ='/asaseller' component={asaseller} />
      


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
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/aftersignin' component={App2} />
          <Route exact path='/aftersignincustomer' component={Hero3} />
          
          <Route exact path='/about_us' component={About_Us} />
         
         
          <Route path='/ManageProduct' component={ManageProduct} />
          <Route path='/ProductList' component={ProductList}/>
          
          <Route path='/productlist' component={ProductList} />
          <Route path='/designimagelist' component={UploadDesignImage} />

          <Route path='/productlist' component={ProductList} />
          <Route path='/designimagelist' component={UploadDesignImage} />
          <Route path='/CarouselContainer' component={CarouselContainer} />
          <Route path='/HelpAudio' component={HelpAudio} />
          <Route path='/manageproduct' component={ManageProduct} /> 
          <Route path='/managenewdesign' component={ManageNewDesign} /> 
          <Route path='/managedesignimage' component={ManageDesignImage} />
          <Route path='/managedesignpayment' component={ManageDesignPayment} />

          <Route path='/deletenotice' component={DeleteNotice} />
          <Route path='/newdesignstatus' component={NewDesignStatus} />
          <Route path='/confirmnotice' component={ConfirmNotice} />

          
          <Route path='/newdesignpayments' component={NewDesignCheckout}/>
          <Route path='/newdesignreceipt' component={NewDesignReceipt}/>

          <Route path='/CustomerDetails' component={CustomerDetails}/>
        
          <Route path='/CustomerOrderDetail' component={CustomerOrderDetail}/>
          <Route path='/Receipt' component={Receipt}/>

         
                   <Section> 
                    <Route path="/product" component={Search} exact  />
                    <Route path="/product/:productID" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/> 
                    <Route path="/payments" component={Checkout}  />
                    </Section>
                   
          
      </Switch>
      
        </Fragment>
        
    </Router>
    </Provider>
  );
 
}

export default App;

