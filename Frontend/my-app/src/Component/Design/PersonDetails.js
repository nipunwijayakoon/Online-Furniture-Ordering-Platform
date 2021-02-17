import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '650px',
        alignment: 'center',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <div className="PDetails" style={{ backgroundImage: "url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
    <Container>
    <Grid container spacing={4} justify="center">
    <FormControl>
    <form className={classes.root} noValidate autoComplete="off">

     <Typography variant="h1" color="textPrimary"  paragraph>
     </Typography>
    
      <div>

      <Typography variant="h8" color="textPrimary"  paragraph>
      Please make sure to provide valid details here. If any of these contact information is invalid and if the the shop owner wouldn't be able to contact you, your order will be dismissed by the manufacturer... 
      </Typography>   
    
        <TextField required id="standard-required" label="Name" defaultValue="" 
        helperText="Add the name of the customer"/>
       
      </div>
      <div>
      <TextField required id="standard-required" label="Address" defaultValue="" 
      helperText="Add the permanent address of the customer"/>
        
      </div>
      <div>
      
      <TextField
          required
          id="outlined-required"
          label="Contact Number"
          defaultValue=""
          variant="outlined"
          helperText="Add the telephone number of the customer"
        />
        
      </div>
      <div>
       
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          defaultValue=""
          variant="outlined"
          helperText="Add the e-mail of the customer"
        />
        
      </div>


      <Typography variant="h6" align="center" color="textPrimary" wrap paragraph>
              Before send your order, please make sure that you have filled all the fields in all the pages and if it's not so, your      order will be rejected by the manufacturer...  
      </Typography>

    </form>
    </FormControl>
    </Grid>
    </Container>
    </div>
  );
}