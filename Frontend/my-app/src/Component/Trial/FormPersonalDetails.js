import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';


//import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
//import MenuItem from '@material-ui/core/MenuItem';
//import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';




export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  state = {
    anchorEl: null
}

handleClick = event => this.setState({ anchorEl: event.currentTarget })
handleClose = () => this.setState({ anchorEl: null })

  


  

  render() {
    const { values, handleChange, handleClick, handleClose } = this.props;
    const { anchorEl } = this.state

    
     
  
    //const {anchorEl, setAnchorEl} = React.useState(null);
 

    {/*handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    handleClose = () => {
      setAnchorEl(null);
    };*/}


    return (
      <MuiThemeProvider>
        <>
        <Container>
        <FormControl>
     
    <div>
    <Grid container spacing={4} justify="center">
      <TextField
          required
          id="outlined-required"
          label="Contact Number"
          onChange={handleChange('contactnumber')}
          defaultValue={values.contactnumber}
          variant="outlined"
          helperText="Add the telephone number of the customer"
        />
      </Grid> 
      </div>

    
        </FormControl>
        </Container>
        
        <FormControl>
        <div>
        <Container>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    Open Menu
              </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>
                </Container>
            </div>
        </FormControl>
        
       
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;