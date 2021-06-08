import React, { Component } from 'react'
import axios from 'axios'
import { Form, Label, FormFeedback, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import './NewDesignCheckout.css';


class NewDesignCheckout extends Component  {
  

    constructor(props) {
      super(props);

      this.state = this.getInitialState();
  }

  getInitialState = () => ({
        data:{  
             
        'cardName': '',
        'cardNo': '',
        'expMonth': '',
        'expYear':'',
        'billDate':'',
        'payInfo':'',
        'cvv': '',
        'totalPrice': '',
        'newdesigncode':'',
        },

      errors: {}
  });
  handleChange = (e) => {
    this.setState({
        
      data: {
        ...this.state.data,
        [e.target.name]:e.target.value
    },

        errors: {
            ...this.state.errors,
            [e.target.name]: ''
        }
    });
}
validate = () => {
  const { data } = this.state;
  let errors = {};
  
  if (data.cardName === '') errors.cardName = 'Card Holder can not be blank.';
  if (data.cardNo === '') errors.cardNo = 'Card Number can not be blank.';
  if (data.expMonth === '') errors.expMonth = 'Expire Month can not be blank.';
  if (data.expYear === '') errors.expYear = 'Expire Year can not be blank.';
  if (data.billDate === '') errors.billDate = 'Billing Date can not be blank.';
  if (data.payInfo === '') errors.payInfo = 'Should be mentioned as (Advance Payment / Full Payment).';
  if (data.cvv === '') errors.cvv = 'CVV can not be blank.';
  if (data.totalPrice === '') errors.totalPrice = 'Paying Amount should be mentioned.';
  if (data.newdesigncode === '') errors.newdesigncode = 'Design Code can not be blank.';
  
  return errors;
}
useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'80%'
  },
 
  form: {
    width: '80%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

handleSubmit = (e) => {
  e.preventDefault();

  const { data} = this.state;

  const errors = this.validate();

  if (Object.keys(errors).length === 0) {
      console.log(data);
      //Call an api here
      axios.post('https://projectbackendlankafurnituremakers.azurewebsites.net/BillingNewDesign/',{newdesigncode:this.state.data.newdesigncode, billDate:this.state.data.billDate, payInfo:this.state.data.payInfo, cardName:this.state.data.cardName, cardNo:this.state.data.cardNo, expMonth:parseFloat(this.state.data.expMonth), expYear:parseFloat(this.state.data.expYear), cvv:this.state.data.cvv, totalPrice:parseFloat(this.state.data.totalPrice)})
      
      this.props.history.push({pathname:'/newdesignreceipt'});
      //Resetting the form
      this.setState(this.getInitialState());
  } else {
      this.setState({ errors });
  }

}



  render(){  
    const { data, errors } = this.state; 
   
        return(
          <div className="payment_aws_newdesign" >
            <Fragment>
              <section className="payment_sdf_newdesign">
              
             <Container component="main" maxWidth="sm">
             <CssBaseline />
             
             <div className="newdesign_payment_paper">
             <div className="container_newdesign_payment" alignItems="center">
             <Container component="main" maxWidth="sm">    
             <Typography component="h1" variant="h5">
              Payment Form
      </Typography>
      
      <Typography component="h2" variant="h9">Transportation Cost is calculated for the distance based on the location coordinates you provided. If there any difference in delivering, you have pay for additional (km)s.</Typography>
       <Typography component="h4">Delivery Charge for Additional Distances will be Rs.150/- per 1km.</Typography>

       <Typography component="h2" variant ="h15" color="primary" >Please Enter Your New Design Code Correctly </Typography>
             
            <form className="newdesign_payment_form"  onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
          <div className="newdesign_payment_caption"  ><h3>Billing Information</h3></div>
         
                <Label for="newdesigncode">Design Code</Label>
                <TextField
                variant="outlined"
                required
                fullWidth
                 value={data.newdesigncode} invalid={errors.newdesigncode? true : false} 
                 name="newdesigncode" 
                 onChange={this.handleChange} />


                </Grid>

                <Grid item xs={12}>
            
                <Label for="billDate">Billing Date</Label>
                <TextField
                 variant="outlined"
                 required
                 fullWidth value={data.billDate} invalid={errors.billDate? true : false} name="billDate" onChange={this.handleChange} />
                <FormFeedback>{errors.billDate}</FormFeedback>
                </Grid>

                <Grid item xs={12}>
                <Label for="payInfo">Payment Info: State here as (Advance Payment/Full Payment)</Label>
                <TextField
                variant="outlined"
                required
                fullWidth value={data.payInfo} invalid={errors.payInfo? true : false} name="payInfo" onChange={this.handleChange} />
                <FormFeedback>{errors.payInfo}</FormFeedback>
            
                </Grid>
                <br/>


            <div className="newdesign_payment_caption"><h3>Add Credit/Debit Card Information</h3></div>
            
            <Grid item xs={12} >
            
                <Label for="cardName">Card Holder's Name</Label>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.cardName} invalid={errors.cardName? true : false} name="cardName" onChange={this.handleChange} />
                <FormFeedback>{errors.cardName}</FormFeedback>
            
            </Grid>
            <Grid item xs={12}>
           
                <Label for="cardNo">Card Number</Label>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.cardNo} invalid={errors.cardNo? true : false} name="cardNo" onChange={this.handleChange} placeholder='0000 0000 0000 0000'
                        pattern='[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}' maxLength='19'/>
                <FormFeedback>{errors.cardNo}</FormFeedback>
            
            </Grid>
            
           
           
              <Grid item xs={12} sm={6}>
           
          
                <Label for="expMonth">Expiration Date</Label>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.expMonth} invalid={errors.expMonth? true : false} name="expMonth" onChange={this.handleChange} placeholder="MM" />
                <FormFeedback>{errors.expMonth}</FormFeedback>
            </Grid>
                <Grid item xs={12} sm={6}>
           
           
           <Label for="expYear">&ensp;</Label>
           <TextField variant="outlined"
               required
               fullWidth
                value={data.expYear} 
                invalid={errors.expYear? true : false} 
                name="expYear" 
                onChange={this.handleChange}
                 placeholder="YY" />
           <FormFeedback>{errors.expYear}</FormFeedback>
       
           
            </Grid>
                   
          
            <Grid item xs={12}>
           
                <Label for="cvv">Security Code(CVV)</Label>
                <TextField
                 variant="outlined"
                 required
                 fullWidth value={data.cvv} invalid={errors.cvv? true : false} name="cvv" onChange={this.handleChange} maxLength='3'/>
                <FormFeedback>{errors.cvv}</FormFeedback>
           
            </Grid>
            <div className="newdesign_payment_caption"><h3>Payment</h3></div>
            <Grid item xs={12}>  
  
            
                <Label for="totalPrice">Amount you Pay (LKR)<br/></Label><br/>
                <div className="newdesign_payment_label">
                Corretly fill the Advance Amount you have to pay or Full Payment to confirm this order. (Amount should not be less than the requested Advance, if this is your initial payment)
                </div>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.totalPrice} invalid={errors.totalPrice? true : false} name="totalPrice" onChange={this.handleChange}/>
                <FormFeedback>{errors.totalPrice}</FormFeedback>
                   
  </Grid>
  <br/>
  <div className="newdesign_payment_button">
    
            <Button className="newdesign_payment_submit"
             type="submit"
                fullWidth
                variant="contained"
               color="black"
               component={Link} to='/newdesignreceipt'>PAY</Button>   
                </div>
            </Grid>       
        </form>
        </Container>
           
  </div>
  
</div>

        <Box mt={5}>

        </Box>


        </Container>
        
       
        </section>
        </Fragment>
        </div>
        )
       
        }

      }
       

export default NewDesignCheckout