import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link, useLocation} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'
import { Button } from '../Button/Button'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import { IconButton } from '@material-ui/core'


export class Cart extends Component {
   
      static contextType = DataContext;
    componentDidMount(){
        this.context.getTotal();
       
    }
 
    
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        
   
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Your Cart is Empty</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={`https://localhost:5001/${item.itemID}`}>
                                <img src={`https://localhost:5001/${item.src}`} width="400" alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>LKR {item.price * item.count}</span>
                        </div>
                                    <Colors colors={item.colors}/>
                                    <h4>{item.description}</h4>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.itemID)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.itemID)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item.itemID)}>X</div>
                               
                            </div>
                            
                        ))
                        }
                    
                    
                    <div className="total">
                        <Link to="/checkout">Payment</Link>                
                          
                           
                        
                        <h3>Total: LKR {total}</h3> 
                    </div>
                </>
                )
            }
        }
}

export default Cart
