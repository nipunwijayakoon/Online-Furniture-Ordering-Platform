import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import './WoodNameColor.css';


export class WoodNameColor extends Component {

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

  return (
    <div className="WName" style={{ backgroundImage: "url('https://images.pexels.com/photos/3773577/pexels-photo-3773577.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}} >
    

    <div className="page01">
    <div className="peo">
    <Container maxwidth="sm">
    
    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <FormControl>

    <Grid container spacing={0.01} justify="center">
      <TextField
          required
          id="outlined-required"
          label="New Design Code"
          onChange={handleChange('newDesignCode')}
          defaultValue={values.newDesignCode}
          variant="outlined"
          helperText="Please Enter the New Design Code You Received Before"
          
        />
      </Grid> 
      
      </FormControl>
      </Container>
      </div>

      </div>



    <div className="page">
    <div className="peo">
    <Container maxwidth="sm">
    
    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <FormControl>

    <Grid container spacing={0.01} justify="center">
      <TextField
          required
          id="outlined-required"
          label="Wood Name"
          onChange={handleChange('woodName')}
          defaultValue={values.woodName}
          variant="outlined"
          helperText="Choose the Wood type from the Available Wood List and Type Correctly the Name of the Wood"
          autoComplete={values.woodName}
        
        />
      </Grid> 
      
      </FormControl>
      </Container>
      </div>
        
      <div>
      <div className="container4">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} variant="contained">
                    Available Woods List
              </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Tamarind Wood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Satinwood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Nadun Wood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Teakwood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Ebony Wood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Jak Wood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Sooriya-Mara Wood</MenuItem>
                    <MenuItem onClick={this.handleClose}>Halmilla Wood</MenuItem>
                </Menu>
        
        </div>
        
        
        </div>
        </div>
        
       
    <div className="page">
    <div className="peo">
        <Container maxWidth="sm">

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <FormControl>

    <Grid container spacing={0.01} justify="center">
      <TextField
          required
          id="outlined-required"
          label="Wood Color"
          onChange={handleChange('woodColour')}
          defaultValue={values.woodColour}
          variant="outlined"
          helperText="Choose the Painting Color from the Color-Code and Type Correctly the Name of the Color"
          autoComplete={values.woodColour}
        />
      </Grid> 
      
      </FormControl>
    
    
    </Container> 
        </div>
       <div>
          
				<div className="container4">
  
         <img src="/images/ExampleWoodColors.jpg"  width="576" height="530" alt=""/>

     
     </div>
  
			</div>

      </div> 
           <br />
        <div>
            <Button
          
              color="secondary"
              variant="contained"
              style={{marginLeft:550,}}
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              style={{marginLeft:15,}}
              onClick={this.continue}
            >Next</Button>
        </div>

    </div>
   );
  }
}

export default WoodNameColor;