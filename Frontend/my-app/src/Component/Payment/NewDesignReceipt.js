import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


export class NewDesignReceipt extends Component {
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
            <h1>Payment Success</h1>
            </div>  
            <div>
           <hr />
           <div className="container_newdesign_receipt" alignItems="center">
           <Typography component="h2" variant="h6" color="textPrimary" paragraph>
                    Your payment is successful & If there would be any problem, you will receive a refund within one week time. 
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

export default NewDesignReceipt;
