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
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import logo from '../../images/company_logo.png';

var total =0;
var price;
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
        'billDate':Date.now,
        'email':'',
        'cvv': '',
        'email':'',
        'totalPrice':JSON.parse(localStorage.getItem('total')),
        'tele':'',
        'address':'',
        'city':'',
        'designcode':'',
        'distance':'',
        },
       
        Cart:JSON.parse(localStorage.getItem('dataCart')),
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
  if (data.tele === '') errors.tele = 'AddressLine1 can not be blank.';
  if (data.address === '') errors.address = 'AddressLine2 can not be blank.';
  if (data.city === '') errors.city = 'City can not be blank.';
  if (data.designcode === '') errors.designcode = 'Designcode can not be blank.';
  if (data.distance === '') errors.distance ='Distance can not be blank';
  
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
      axios.post('https://lankafurnituremakersapi.azurewebsites.net/api/BillingInfo/',{email:this.state.data.email,cardName:this.state.data.cardName,cardNo:this.state.data.cardNo,expMonth:parseFloat(this.state.data.expMonth),expYear:parseFloat(this.state.data.expYear),billDate:this.state.data.billDate,cvv:this.state.data.cvv,totalPrice:parseFloat(this.state.data.totalPrice*100),tele:this.state.data.tele, address:this.state.data.address, city:this.state.data.city, designcode:this.state.data.designcode, distance:this.state.data.distance})
      
      this.props.history.push({pathname:'/Receipt'});
    
      this.setState(this.getInitialState());
  } else {
      this.setState({ errors });
  }  
  
  var doc = new jsPDF('landscape','px','a4','false');
  doc.addImage(logo,'PNG',160,60,320,280)
  doc.setFont('Arial','bold')
  doc.text(238,30,'LANKA FURNITURE MAKERS')
  doc.text(270,370,'CONTACT US')

  doc.setFont('Arial','normal')
  doc.text(180,390,'Tel: 081-2235643 Mobile: (+94) 71 3452908 / 76 9145689')
  doc.text(230,407,'lankafurniture123@gmail.com')
  

  doc.addPage()
  doc.setFont('Arial','bold')
  doc.text(232,30,'Payment Details')

  doc.setFont('Arial','bold')
  doc.text(150,80,'Your Email')
  doc.text(150,100,'Card Name')
  doc.text(150,120,'Card Number')
  doc.text(150,140,'Address')
  doc.text(150,160,'City')
  doc.text(150,180,'Distance (km)')
  doc.text(150,200,'Total price (Rs.)')
  doc.text(150,220,'Telephone Number')
  doc.text(150,240,'Date')
  //doc.text(150,260,'Customer Telephone')

  doc.text(300,80,':')
  doc.text(300,100,':')
  doc.text(300,120,':')
  doc.text(300,140,':')
  doc.text(300,160,':')
  doc.text(300,180,':')
  doc.text(300,200,':')
  doc.text(300,220,':')
  doc.text(300,240,':')
  //doc.text(300,260,':')
 
  doc.setFont('Helvertica','normal')

  doc.text(350,80, this.state.data.email.toString())
  doc.text(350,100, this.state.data.cardName.toString())
  doc.text(350,120, this.state.data.cardNo.toString())
 doc.text(350,140, this.state.data.address.toString())
 doc.text(350,160, this.state.data.city.toString())
 doc.text(350,180, this.state.data.distance.toString())
 doc.text(350,200, (this.state.data.totalPrice + this.state.data.distance * 100).toString())
 doc.text(350,220, this.state.data.tele.toString())
 doc.text(350,240, this.state.data.billDate.toString())
  //doc.text(350,260, contactDetails.toString())


  doc.save('Payment Details.pdf')


     }



  render(){  
    
    const {Cart, data, errors, } = this.state; 
     
  
        return(
          <div className="section_new">
          <section>
          <div className="sdf" >
            
            {/* <Fragment> */}
          
             <Container component="main" maxWidth="sm" fullWidth="md">
             <CssBaseline />
             <div className="paper">
               
             <Typography component="h1" variant="h5">
              Payment Form
      </Typography>
      <br/>
      <Typography component="h4" variant="h10">   This is your payment information. <br/>You can pay an advance amount or the full payment for the furniture you want to buy. Advance amount should not be less than Rs.5,000/- <br/>
     <br/>    We kindly request you to fill in all the details below correctly. </Typography><br/>

      <Typography component="h2" variant="h9">    Also we charge a delivery cost according to the distance between your destination and the branch.Therefore make sure to choose the items from the close branch from your destination.</Typography>
       <Typography component="h4">    Delivery charge will be Rs.100/- per 1km.</Typography>

       <Typography component="h2" variant ="h15">   Your Order Number is {JSON.parse(localStorage.getItem('designcode'))}</Typography>
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

<br/>
     <Label for="designcode">Order Number</Label>
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
                id="date"
                type="date"
                defaultValue="2021-06-06"
                InputLabelProps={{
                  shrink:true,
                }}
                 variant="outlined"
                 required
                 fullWidth value={data.billDate} invalid={errors.billDate? true : false} name="billDate" onChange={this.handleChange} />
                <FormFeedback>{errors.billDate}</FormFeedback>
            
  </Grid><br/>
  <div className="pay" ><h3>Personal Information</h3></div>
  <Grid item xs={12}>
            
            <Label for="address2">Telephone Number</Label>
            <TextField
             variant="outlined"
             required
             fullWidth value={data.tele} invalid={errors.tele? true : false} name="tele" onChange={this.handleChange} />
            <FormFeedback>{errors.tele}</FormFeedback>
        
</Grid>
  <Grid item xs={12}>
            
            <Label for="address1">Address</Label>
            <TextField
             variant="outlined"
             required
             fullWidth value={data.address} invalid={errors.address? true : false} name="address" onChange={this.handleChange} />
            <FormFeedback>{errors.address}</FormFeedback>
        
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
<Typography component="h4" variant="h10">    Please correctly fill the approximate distance between your destination and the choosen branch. Click the following button to measure the distance.</Typography>
<td onClick={()=> window.open("https://www.mapdevelopers.com/distance_finder.php", "_blank")}><Button>   MEASURE DISTANCE</Button></td><br/>
{/* <Typography component="h4" variant="h10">If you purchase your furniture from different branches, do not fill this distance part. The man who delivers your order will give you a receipt of delivery charges when it delivers. Also you can contact us for any issues.</Typography> */}
<br/>
<Typography component="h3" variant ="h15">   Anyway, our delivery person will inform you the correct distance between the branch and your destination.</Typography>
<br/>
<Typography component="h2" variant ="h15">   So, You will be charged accordinglly.</Typography>
<Grid item xs={12}>

               
            <Label for="distance">Distance (km) </Label>
            <div className="label">
                <p>   Make sure to enter the distance in km and do not type "km" at the end. Insert the approximate distance between the branch and your destination</p>
                </div>
            <TextField
             variant="outlined"
             required
             fullWidth value={data.distance}  invalid={errors.distance? true : false} name="distance" onChange={this.handleChange} />
             <FormFeedback>{errors.distance}</FormFeedback>
          
        
</Grid>
<br/>
            <div className="pay" ><h3>Add Credit/Debit Card Information</h3></div>
            
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

            <div className="pay" ><h3>Payment</h3></div>
            <br/>
            <div>
                                <table>
                                    <thead>
                                        <tr className="btn-primary">
                                            <th> Product Name</th>
                                            <th>Count </th>
                                            <th>Price(Rs)</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Cart.map(order =>
                                        <tr key={order.productId}>
                                            <td >
                                                <span >{order.productName}</span>
                                            </td>
                                           
                                            <td>
                                                <span >{order.count}</span>
                                            </td>
                                            <td >
                                                <span >{price=order.price * order.count}</span>
                                                
                                            </td>
                                           
                                        
                                        </tr>
                                         )}

                                       

                                        <tr >
                                        <td >
                                            <span ></span>
                                        </td>
                                        <td >
                                            <span><strong>TOTAL</strong></span>
                                        </td>
                                       
                                        <td >
                                            <span ><strong>{this.state.data.totalPrice }</strong></span>
                                            <span hidden>{total =0}</span>
                                        </td>
                                        </tr> 

                                    </tbody>
                                
                                    </table>
                            </div>
            <div className="distance">
              <br/>
            <p>The total amount of your order is shown below.<br></br>
            Price of the items = Rs. {JSON.parse(localStorage.getItem('total'))}<br/>

            Delivery cost = {data.distance}km x Rs.100 = Rs.{data.distance * 100}<br/>
       
            Total Amount of your Order = Rs.{data.distance * 100 + JSON.parse(localStorage.getItem('total'))} </p>
            </div>
          
          
           
            <Grid item xs={12}>  
  
            
                <Label for="totalPrice">Amount you pay (Rs.)</Label><br/>
                <div className="label">
                <p>Corretly fill the advance amount you pay for this order. (Amount should not be less than Rs.5,000/-)</p>
                </div>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.totalPrice + data.distance * 100} invalid={errors.totalPrice? true : false} name="totalPrice" onChange={this.handleChange}/>
                <FormFeedback>{errors.totalPrice}</FormFeedback>
                   
  </Grid>
  <br/>
 
    <br/>
    <Typography allign="center" >
            <Button className="submitpay"
             type="submit"
                fullWidth
                variant="contained"
                color="primary"
                                    
                component={Link} to='/Receipt'>PAY</Button> 
               
               </Typography>  
                 
                
            </Grid>       
        </form>
        <br/>
            <br/>
  </div>
 
        </Container>
        
        
        {/* </Fragment> */}
        </div>
        </section>
        </div>
        )
       
        }

}

       

export default Checkout

