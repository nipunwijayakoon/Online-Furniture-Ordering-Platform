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


class DeleteNotice extends Component  {
  

    constructor(props) {
      super(props);

      this.state = this.getInitialState();
  }

  getInitialState = () => ({
        data:{  

            'input_Design_Code':'',
            'statusof_Design':'', 
            'deleted_Reason':'',
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
  if (data.statusof_Design === '') errors.statusof_Design = 'Order Status can not be blank.';
  if (data.deleted_Reason === '') errors.deleted_Reason = 'Please Enter the Reason for Rejection.';
  
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
      axios.post('https://localhost:5001/api/DeletedDesigns/',{input_Design_Code:this.state.data.input_Design_Code, statusof_Design:this.state.data.statusof_Design, deleted_Reason:this.state.data.deleted_Reason })
      
      this.props.history.push({pathname:'/deletenotice'});
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
             <div className="container_newdesign_deletenotice" alignItems="center">
             <Container component="main" maxWidth="sm">    
             <Typography component="h1" variant="h8">
              Order Rejection Notice
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
            
                <Label for="statusof_Design">Is the Order Rejected ? (Rejected/Not Rejected)</Label><br/>
                <TextField
                variant="outlined"
                required
                fullWidth
                 value={data.statusof_Design} invalid={errors.statusof_Design? true : false} 
                 name="statusof_Design" 
                 onChange={this.handleChange} />
            
                </Grid>

                <Grid item xs={12}>
            
                <Label for="deleted_Reason">Reason for Rejecting the Order</Label>
                <TextField
                 variant="outlined"
                 required
                 fullWidth value={data.deleted_Reason} invalid={errors.deleted_Reason? true : false} name="deleted_Reason" onChange={this.handleChange} />
                <FormFeedback>{errors.deleted_Reason}</FormFeedback>
                <br />
                </Grid>

  <br/>
  <div className="postbutton">
    
            <Button className="submitnotice"
             type="submit"
                fullWidth
                variant="contained"
               color="black"
               component={Link} to='/deletenotice'>POST</Button>   
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
       

export default DeleteNotice