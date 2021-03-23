import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import './css/Item.css'
import {DataContext} from './Context'

import Page from '../Page'



export class Item extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }


    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        console.log('car', cart)
        
        return (
            <header>
                <div className="menu" onClick={this.menuToggle} style={{ backgroundColor: "red"}}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><Link to="/">MAKE YOUR SPACE EXTRA COMFORTABLE</Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                       
                        <h1 ><li className="catalog" ><Link to="/product">FURNITURE CATALOG</Link></li></h1>
                        
{/*                         
                        <li className="close" onClick={this.menuToggle}>
                            <img src={Close} alt="" width="20"/>
                        </li> */}
                    </ul>
                   
                </nav>
            </header>
        )
    }
}

export default Item