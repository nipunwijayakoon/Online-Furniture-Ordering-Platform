import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

//import './WoodNameColor.css';

export class PersonDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, handleClick, handleClose } = this.props;

  return (
    <div className="PDetails" style={{ backgroundImage: "url('https://images.pexels.com/photos/1743226/pexels-photo-1743226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
    <Container>
    <Grid container spacing={4} justify="center">
    <FormControl>
    

     <Typography variant="h1" color="textPrimary"  paragraph>
     </Typography>
    
      <div>

      <Typography variant="h8" color="textPrimary"  paragraph>
      Please make sure to provide valid details here. If any of these contact information is invalid and if the the shop owner wouldn't be able to contact you, your order will be dismissed by the manufacturer... 
      </Typography>   
    

      </div>

      <div>
      <Typography variant="h6" align="left" color="textSecondary" paragraph>
         |
        </Typography> 
      </div>

      <div>
      
      <TextField
          required
          id="outlined-required"
          label="Person Name"
          onChange={handleChange('personName')}
          defaultValue={values.personName}
          variant="outlined"
          helperText="Add the Contact Name"
        />
        
      </div> 

      <div>
      <Typography variant="h8" align="left" color="textSecondary" paragraph>
         |
        </Typography> 
      </div>

      <div>
      
      <TextField
          required
          id="outlined-required"
          label="Postal Address"
          onChange={handleChange('personAddress')}
          defaultValue={values.personAddress}
          variant="outlined"
          helperText="Add the Postal Address"
        />
        
      </div> 

      <div>
      <Typography variant="h8" align="left" color="textSecondary" paragraph>
         |
        </Typography> 
      </div>
      <div>
      
      <TextField
          required
          id="outlined-required"
          label="Contact Number"
          onChange={handleChange('contactDetails')}
          defaultValue={values.contactDetails}
          variant="outlined"
          helperText="Add the Contact Number of the Customer"
        />
        
      </div>

      <div>
      <Typography variant="h8" align="left" color="textSecondary" paragraph>
         |
        </Typography> 
      </div>

      <div>
       
        <TextField
          required
          id="outlined-required"
          label="E-mail"
          onChange={handleChange('personEmail')}
          defaultValue={values.personEmail}
          variant="outlined"
          helperText="Add the E-mail of the Customer"
        />
        
      </div>  


     
    
    </FormControl>
    </Grid>
    </Container>

    <br />

            <Button
              color="secondary"
              variant="contained"
              style={{marginLeft:60,}}
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              style={{marginLeft:14,}}
              onClick={this.continue}
            >Continue</Button>



    </div>
  );
}
}

export default PersonDetails;