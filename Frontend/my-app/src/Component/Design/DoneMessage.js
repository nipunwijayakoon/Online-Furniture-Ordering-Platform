import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './WoodNameColor.css';
import {Button} from 'reactstrap'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import Link from '@material-ui/core/Link';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    return (
        <div className="Success" style={{ backgroundImage: "url('https://images.pexels.com/photos/3773582/pexels-photo-3773582.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
          <div>

          <p><Typography component="h1" variant="h1" color="textPrimary" gutterBottom>
                    ``
          </Typography></p>


            <hr />
          </div>
         <div> 
            <h1>Thank You For Your Submission</h1>
            </div>  
            <div>
           <hr />
           <div className="container_designupload_receipt" alignItems="center">
           <Typography component="h2" variant="h6" color="textPrimary" paragraph>
                    Your New Design Order is successfully submitted & You will receive an email with order submission successful message. One of our sellers will be contacted you.
          </Typography>
          <Typography component="h2" variant="h7" color="textSecondary" paragraph>
                    You can see the status of your order in "ORDER STATUS"
          </Typography>
          <Typography component="h2" variant="h8" color="error" paragraph>
                    Stay in touch...
          </Typography>
          </div>
          
            </div>
            <Container>
            <div>
            
            <Grid container spacing={2} justify="center">
                <Grid item>

                <div className="ViewDesignLink">
                <Button variant="Contained" color="textPrimary">
                    <Link underline="none" href= "viewdesign">VIEW DESIGNS</Link>    
                  </Button>
                  </div>
                </Grid>
                
              </Grid>
              
            </div>
            </Container>
      </div>  
      
    );
  }
}

export default Success;