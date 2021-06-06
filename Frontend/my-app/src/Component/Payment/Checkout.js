import React, { Component } from 'react'
import axios from 'axios'
import { Form, Label,Input,FormGroup, FormFeedback, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';


class Checkout extends Component  {
  

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
        'email':'',
        'cvv': '',
        'email':'',
        'totalPrice':JSON.parse(localStorage.getItem('total')),
        'address1':'',
        'address2':'',
        'city':'',
        'designcode':'',
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
  
  if (data.cardName === '') errors.cardName = 'Card holder can not be blank.';
  if (data.cardNo === '') errors.cardNo = 'Card no can not be blank.';
  if (data.expMonth === '') errors.expMonth = 'Expire month can not be blank.';
  if (data.expYear === '') errors.expYear = 'Expire year can not be blank.';
  if (data.billDate === '') errors.billDate = 'Bill date can not be blank.';
  if (data.cvv === '') errors.cvv = 'CVV can not be blank.';
  if (data.address1 === '') errors.address1 = 'AddressLine1 can not be blank.';
  if (data.address2 === '') errors.address2 = 'AddressLine2 can not be blank.';
  if (data.city === '') errors.city = 'City can not be blank.';
  if (data.designcode === '') errors.designcode = 'City can not be blank.';
  
  return errors;
}
useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'100%'
  },
 
  form: {
    width: '100%',
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
      axios.post('https://localhost:5001/api/BillingInfo/',{email:this.state.data.email,cardName:this.state.data.cardName,cardNo:this.state.data.cardNo,expMonth:parseFloat(this.state.data.expMonth),expYear:parseFloat(this.state.data.expYear),billDate:this.state.data.billDate,cvv:this.state.data.cvv,totalPrice:parseFloat(this.state.data.totalPrice*100),address1:this.state.data.address1, address2:this.state.data.address2, city:this.state.data.city, designcode:this.state.data.designcode})
      
      this.props.history.push({pathname:'/Receipt'});
      //Resetting the form
      this.setState(this.getInitialState());
  } else {
      this.setState({ errors });
  }
}

  render(){  
    const { data, errors } = this.state; 
   // const classes = useStyles();
        return(
          <div className="aws" >
            <Fragment>
              <section className="sdf">
             <Container component="main" maxWidth="sm">
             <CssBaseline />
             <div className="paper">
               
             <Typography component="h1" variant="h5">
              Payment Form
      </Typography>
      <br/>
      <Typography component="h4" variant="h10">This is your payment information. You have to pay an advance for the furniture you want to buy. It should not be less than Rs.5,000/- Otherwise this order will have to be rejected.
      We kindly request you to fill in all the details below correctly. </Typography><br/>

      <Typography component="h2" variant="h9"> Also we charge a delivery cost according to the distance between your destination and the branch.Therefore make sure to choose the items from the close branch from your destination.</Typography>
       <Typography component="h4">Delivery charge will be Rs.500/- per 1km.</Typography>

       <Typography component="h2" variant ="h15">Your Order Number is {JSON.parse(localStorage.getItem('designcode'))}</Typography>
       <br/>       
            <form className="form"  onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
          <div className="pay"  ><h3>Billing Information</h3></div>
         
                <Label for="email">Email Address</Label><br/>
                <TextField
                variant="outlined"
                required
                fullWidth
                 value={data.email} invalid={errors.email? true : false} 
                 name="email" 
                 onChange={this.handleChange} /><br/>
              {/* //  <FormFeedback>{errors.email}</FormFeedback> */}


     <Label for="designcode">Design Code</Label>
              <div className="label">
                <p>Re-Enter the Order number of your purchase</p><br/>
                </div>
                <TextField
                variant="outlined"
                required
                fullWidth
                 value={data.designcode} invalid={errors.designcode? true : false} 
                 name="designcode" 
                 onChange={this.handleChange} />


            </Grid>
            <Grid item xs={12}>
            
                <Label for="billDate">Bill Date</Label>
                <TextField
                 variant="outlined"
                 required
                 fullWidth value={data.billDate} invalid={errors.billDate? true : false} name="billDate" onChange={this.handleChange} />
                <FormFeedback>{errors.billDate}</FormFeedback>
            
  </Grid><br/>
  <div className="pay"><h3>Address Information</h3></div>
  <Grid item xs={12}>
            
            <Label for="address1">AddressLine1</Label>
            <TextField
             variant="outlined"
             required
             fullWidth value={data.address1} invalid={errors.address1? true : false} name="address1" onChange={this.handleChange} />
            <FormFeedback>{errors.address1}</FormFeedback>
        
</Grid>

<Grid item xs={12}>
            
            <Label for="address2">AddressLine2</Label>
            <TextField
             variant="outlined"
             required
             fullWidth value={data.address2} invalid={errors.address2? true : false} name="address2" onChange={this.handleChange} />
            <FormFeedback>{errors.address2}</FormFeedback>
        
</Grid>

<Grid item xs={12}>
            
            <Label for="city">City</Label>
            <TextField
             variant="outlined"
             required
             fullWidth value={data.city} invalid={errors.city? true : false} name="city" onChange={this.handleChange} />
            <FormFeedback>{errors.city}</FormFeedback>
        
</Grid>
<br/>
            <div className="pay"><h3>Add Credit/Debit Card Information</h3></div>
            
            <Grid item xs={12} >
            
                <Label for="cardName">Card Holder Name</Label>
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
            <div className="pay"><h3>Payment</h3></div>
            <Grid item xs={12}>  
  
            
                <Label for="totalPrice">Amount you pay (Rs.)</Label><br/>
                <div className="label">
                <p>Corretly fill the advance amount you pay for this order. (Amount should not be less than Rs.5,000/-)</p>
                </div>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.totalPrice} invalid={errors.totalPrice? true : false} name="totalPrice" onChange={this.handleChange}/>
                <FormFeedback>{errors.totalPrice}</FormFeedback>
                   
  </Grid>
  <br/>
  <div className="paybutton">
    <br/>
            <Button className="submitpay"
             type="submit"
                fullWidth
                variant="contained"
               color="black"
                component={Link} to='/Receipt'>PAY</Button>   
                </div>
            </Grid>       
        </form>
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
       

export default Checkout