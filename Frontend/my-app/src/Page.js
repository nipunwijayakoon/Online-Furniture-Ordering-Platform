import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Component/Header'
import Section from './Component/Section'
import {DataProvider} from './Component/Context'
import Item from './Component/Item';
import Footer from './Component/Footer';
import FooterDesign from './Component/FooterDesign';



import UploadNewDesign from './Component/Design/UploadNewDesign';
import SwipeableViews from 'react-swipeable-views';
import Products from './Component/section/Products';


class Page extends React.Component{
  render(){
    return(
      
      <DataProvider>

        <div className="app">
        
          <Router>
            <Header />
            <Item   />
            {/*<Route path="/shopping-cart-react/" component={Section} />*/}
            <Section />
           
          </Router>
        </div>
      </DataProvider>
    );
  }
}
export default Page;
