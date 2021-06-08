import React, { Component } from 'react'
import axios from 'axios'
import { Label, FormFeedback, Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import './Notice.css';


class ConfirmNotice extends Component  {
  

    constructor(props) {
      super(props);

      this.state = this.getInitialState();
  }

  getInitialState = () => ({
        data:{  
             
            'input_Design_Code': '',
            'statusof_Order' : '',
            'estimated_Amount':'',
            'no_of_kms':'',
            'charge_for_km':'',
            'percentage_of_advance':'',
            'seller_Contact':'',
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
  
  if (data.input_Design_Code === '') errors.input_Design_Code = 'Design Code can not be blank.';
  if (data.statusof_Order === '') errors.statusof_Order = 'Order Status can not be blank.';
  if (data.estimated_Amount === '') errors.estimated_Amount = 'Estimated Amount can not be blank.';
  if (data.no_of_kms === '') errors.no_of_kms = 'Distance can not be blank.';
  if (data.charge_for_km === '') errors.charge_for_km = 'Charge for 1km can not be blank.';
  if (data.seller_Contact === '') errors.seller_Contact = 'Seller Contact Number can not be blanked.';
  
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
      axios.post('https://lankafurnituremakersapi.azurewebsites.net/api/ConfirmedDesigns/',{input_Design_Code:this.state.data.input_Design_Code, statusof_Order:this.state.data.statusof_Order, estimated_Amount:parseFloat(this.state.data.estimated_Amount), no_of_kms:parseFloat(this.state.data.no_of_kms), charge_for_km:parseFloat(this.state.data.charge_for_km), percentage_of_advance:parseFloat(this.state.data.percentage_of_advance), seller_Contact:this.state.data.seller_Contact })
      
      this.props.history.push({pathname:'/confirmnotice'});
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
          <div className="notice_aws_newdesign" >
            <Fragment>
              <section className="notice_sdf_newdesign">
              
             <Container component="main" maxWidth="sm">
             <CssBaseline />
             
             <div className="newdesign_paper">
             <div className="container_newdesign_confirmnotice" alignItems="center">
             <Container component="main" maxWidth="sm">    
             <Typography component="h1" variant="h8">
              Order Confirmation Notice
              <br />
            </Typography>

            <Typography variant="h7" component="h4"><br />Enter Design Code Correctly for the Relevant Order</Typography>

            <form className="newdesign_form"  onSubmit={this.handleSubmit}>
            
            <Grid container spacing={2}>

                <Grid item xs={12}><Label for="input_Design_Code">Input Design Code</Label>
                <TextField
                variant="outlined"
                required
                fullWidth
                 value={data.input_Design_Code} invalid={errors.input_Design_Code? true : false} 
                 name="input_Design_Code" 
                 onChange={this.handleChange} />
                </Grid>

                <Grid item xs={12}>
            
                <Label for="statusof_Order">Is the Order Confirmed ? (Confirmed/Pending)</Label><br/>
                <TextField
                variant="outlined"
                required
                fullWidth
                 value={data.statusof_Order} invalid={errors.statusof_Order? true : false} 
                 name="statusof_Order" 
                 onChange={this.handleChange} />
            
                </Grid>

                <Grid item xs={12}>
            
                <Label for="estimated_Amount">Estimated Amount for Furniture (LKR:)</Label>
                <TextField
                 variant="outlined"
                 required
                 fullWidth value={data.estimated_Amount} invalid={errors.estimated_Amount? true : false} name="estimated_Amount" onChange={this.handleChange} />
                <FormFeedback>{errors.estimated_Amount}</FormFeedback>
                <br />
                </Grid>

                <div className="post"><h3>Transportation & Advance Payment Calculation</h3><br /></div>
                
                <Typography variant="h7" component="h4">Please Mind to Enter Distance in (km)s to Relevant Destination from Shop for the Smallest Integer</Typography>
                <Typography variant="h7" component="h3">Ex: If the Real Distance is 18.97 km, Enter it as 18 km</Typography>

                <Grid item xs={4}>
                <Label for="no_of_kms">Distance in (km)</Label>
                <TextField
                variant="outlined"
                required
                fullWidth value={data.no_of_kms} invalid={errors.no_of_kms? true : false} name="no_of_kms" onChange={this.handleChange} />
                <FormFeedback>{errors.no_of_kms}</FormFeedback>
            
                </Grid>

                <Grid item xs={4}>
            
                <Label for="charge_for_km">Charge for 1km (LKR:)</Label>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.charge_for_km} invalid={errors.charge_for_km? true : false} name="charge_for_km" onChange={this.handleChange} />
                <FormFeedback>{errors.charge_for_km}</FormFeedback>
                
                </Grid>

                 <Grid item xs={4}>
            
                <Label for="percentage_of_advance">Percentage for Advance (%)</Label>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.percentage_of_advance} invalid={errors.percentage_of_advance? true : false} name="percentage_of_advance" onChange={this.handleChange} />
                <FormFeedback>{errors.percentage_of_advance}</FormFeedback>
                
                </Grid>

                <Typography variant="h7" component="h4">Percentage for Advance means, how much percentage value the customer has to pay of the total amount as Advance Money</Typography>
                <Typography variant="h7" component="h3">Ex: If you enter 20, then Advance Payment = (Estimated Amount + Transportation Cost) x 20% </Typography>
                

                <Grid item xs={12}> <br /> 
  
                <Label for="seller_Contact">Seller's Contact Number</Label><br/>
                <TextField 
                 variant="outlined"
                 required
                 fullWidth value={data.seller_Contact} invalid={errors.seller_Contact? true : false} name="seller_Contact" onChange={this.handleChange}/>
                <FormFeedback>{errors.seller_Contact}</FormFeedback>
                
                <div className="newdesign_label">
                <span>Customer will contact you through this contact number after payments.</span>
                </div>
                   
  </Grid>
  <br/>
  <div className="postbutton">
    
            <Button className="submitnotice"
             type="submit"
                fullWidth
                variant="contained"
               color="black"
               component={Link} to='/confirmnotice'>POST</Button>   
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
       

export default ConfirmNotice