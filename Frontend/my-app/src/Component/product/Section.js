import React, { Component } from 'react'
import Products from '../section/Products'
import Details from '../section/Details'
import {Route} from "react-router-dom"
import Cart from '../section/Cart'
import Payment from '../section/Payment'
import Search from '../section/Products'


export class Section extends Component {
    render() {
        return (
            <Section>
                    {/* <Route path="/" component={Products} exact /> */}
                    <Route path="/product" component={Search} exact  />
                    <Route path="/product/:productID" component={Details} exact />
                    <Route path="/cart/:id" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact />
            </Section>
        )
    }
}

export default Section
