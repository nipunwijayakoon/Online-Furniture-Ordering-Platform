import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Checkout.css'

class Receipt extends React.Component{
    
   
    componentDidMount(){
       
    }

  
    render(){
        

        
            return(
                <div >
                    <React.Fragment>
                   
             
            <div>
                <br/>
            <h2>Thank You For Your Purchase!!!</h2>
           <hr />
            <h3>Your payment is in progress....</h3><br/>
            <h3>You can finish your payment within 2years. An email will sent to you by the manager.</h3>
            </div>
            <br/>
            <div>
            <Button component={Link} to='/viewdesign'  variant="outlined"  color="secondary" margin="50px">
                      Back to Designs
                    </Button> 
            </div>   
                    </React.Fragment>
                    </div >
                
               
            
                         
            )
        }
        
    }



export default Receipt