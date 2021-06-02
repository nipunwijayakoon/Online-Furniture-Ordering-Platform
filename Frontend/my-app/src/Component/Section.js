import React, { Component } from 'react'

import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'

import {Link} from 'react-router-dom'



import '../Component/Section.css'
import Checkout from './Payment/Checkout'
import Receipt from './Payment/Receipt'





class Section extends React.Component{
    render(){
      return(
          <div className="section">
        <section>
                    
                    <Route path="/product" component={Products} exact  />
                    <Route path="/product/:productID" component={Details} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payments" component={Checkout} exact />
                    <Route path='/Receipt' component={Receipt}/>

         </section>
         </div>   
        )
    
    }
}

export default Section