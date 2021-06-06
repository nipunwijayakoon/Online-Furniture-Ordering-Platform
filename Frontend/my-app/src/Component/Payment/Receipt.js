import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Checkout.css'
import { Form, Label,Input,FormGroup, FormFeedback } from 'reactstrap';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Table } from 'react-bootstrap';  


var total =0;
var price;

class Receipt extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Cart:JSON.parse(localStorage.getItem('dataCart')),
            error:null,
            
            response:{},
            orders:[], 
        }
    }
    
   
    componentDidMount(){
       
    }

    
   
  
    render(){
    
        const{Cart,error}=this.state;
  
        
            return(
                <div className="rep" >
                    <React.Fragment>
                   
                    <div>
            <Button component={Link} to='/viewdesign'  variant="outlined"  color="secondary"  marginRight="10px">
                      Back to Designs
                    </Button> 
            </div>
           
            <div>
                <br/><hr/>
            <h2>Thank You For Your Purchase!!!</h2><hr/>
            
            <h3>Your payment is in progress....</h3><br/>
            <h3>You can finish your full-payment within 2years and an email will sent to you by the manager.</h3><br/>
            <h3>If the order is cancelled due to any reason, the refund will be given to you within 5-10 days.</h3>

           <br/>
                      <div color="white">      
                      <div>
            <h2>IMPORTANT :</h2>
            <h3>Delivery Charge will be apply as Rs.500 for 1 km. Make Sure to pay the Delivery cost when your product is delivered to your location. Our seller will give you an receipt indicating the delivery charge.</h3>
            </div>    
            <table >
            <thead>
                                             <tr  marginLeft="30px" marginRight="50px"> 
                                                <th>FURNITURE</th>
                                                <th>IMAGE</th>
                                                
                                                <th>COUNT</th>
                                                <th>PRICE(Rs)</th>
                                            </tr>
                                        </thead>

                    <tbody>
                                            {Cart.map(order =>
                                            <tr   marginLeft="50px" marginRight="50px">
                                                <td>
                                                   {order.productName}
                                                </td>
                                                <td><img src ={order.imageSrc} className="poto"/></td>
                                                
                                                <td >
                                                   <span hidden>{order.count}</span>
                                                   <span >{order.count}</span> 
                                                </td>
                                                <td >
                                                    {price=order.count*order.price}
                                                    <span hidden>{total=total+price}</span>
                                                </td>
                                            </tr>
                                             )}
                                        
                                            <tr className="service">
                                            <td className="tableitem">
                                                <p className="itemtext"></p>
                                            </td>
                                            <td className="tableitem">
                                                <p className="itemtext"><strong>TOTAL</strong></p>
                                            </td>
                                            <td></td>
                                            <td className="tableitem">
                                                <span className="itemtext"><strong>{total}</strong></span>
                                                <span hidden>{total =0}</span>
                                            </td>
                                            </tr>

                                        </tbody>
                                    
                                        </table>
                                        
                                        </div>
                                      
            </div>
            <br/>



            
           
                    </React.Fragment>
                   
               
                    </div >
                         
            )
        }
        
    }



export default Receipt