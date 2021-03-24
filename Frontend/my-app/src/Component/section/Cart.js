import React, { useState, useEffect, Component } from 'react'
//import '../css/Details.css'
import '../css/Cart.css'  
import { Table,Button } from 'react-bootstrap'; 
import {Link, useLocation} from 'react-router-dom'
import CartIcon from '../svg/shopping-cart-solid.svg'
import axios from 'axios'; 
//import { Button } from '../Button/Button'
import Colors from './Colors'


export default function Cart() {
   
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    const removeProduct = id => {
        if(window.confirm("Do you want to remove this product?")){
            cart.forEach((item, index) => {
                if(item.itemID === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }



    const reduction = id => {
        cart.forEach(item =>{
            if(item.itemID === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item.itemID === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }
    
    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])
    
    


    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart !== null) {setCart(dataCart)}
    },[])

  

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])



    if(cart.length === 0){
        return <h3 style={{textAlign: "center", fontSize: "4rem"}}>Cart is Empty!!!</h3>}
    else{
        return (
         

           
            
           
             <>
                
                     
                      {
                      cart.map(product => (  
                        <div className="details cart" key={product.itemID}>  
                          <img src={`https://localhost:5001/${product.src}`} width="400" alt=""/>     
                          <div className="box">
                          <div className="row">
                                        <h2>{product.title}</h2>
                                        <span>LKR {product.price * product.count}</span>
                        </div> 
                        <h4>{product.description}</h4>
                                    <p>{product.content}</p>
                                    <div className="amount">  
                          <button className="count" onClick={() => reduction(product.itemID)}> - </button>
                               <span> {product.count} </span>
                               <button className="count" onClick={() => increase(product.itemID)}> + </button>  
                            </div>
                            </div>
                          <div className="delete" onClick={() => removeProduct(product.itemID)}>
                          X</div> 
                       </div>
                      ))
                      }  
                  
                    
                  
           <div className="total" >
               <Link to='./../Checkout'><h6>Payment</h6></Link>              
                         
               <h6>Total : Rs.{total}</h6>
           </div>
               
            </>
                    
           
       
     
           

    )
                    }
    
}
