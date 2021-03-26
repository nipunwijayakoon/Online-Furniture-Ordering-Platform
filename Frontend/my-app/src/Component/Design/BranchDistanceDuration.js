import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';

export class BranchDistanceDuration extends Component {

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
    <div className="WName" style={{ backgroundImage: "url('https://images.pexels.com/photos/3316924/pexels-photo-3316924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}} >
    
    <div className="page">
    <div className="peo">
    <Container maxwidth="sm">
    
    <FormControl>

    <Typography variant="h1" color="textPrimary"  paragraph>
    </Typography>

    <Grid container spacing={0.01} justify="center">
      <TextField
          required
          id="outlined-required"
          label="Branch Name"
          onChange={handleChange('branchName')}
          defaultValue={values.branchName}
          variant="outlined"
          helperText="Choose the Branch Name from the Available Furniture Shops List and Find the Closest Shop for You and Type Correctly the Name of that"
          autoComplete={values.branchName}
       
       />
      </Grid> 
      
      </FormControl>
      </Container>
      </div>
        
      <div>
      <div className="container4">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick} variant="contained">
                    Available Furniture Shops of Us
              </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Ampara</MenuItem>
                    <MenuItem onClick={this.handleClose}>Anuradhapura</MenuItem>
                    <MenuItem onClick={this.handleClose}>Awissawella</MenuItem>
                    <MenuItem onClick={this.handleClose}>Badulla</MenuItem>
                    <MenuItem onClick={this.handleClose}>Bandaragama</MenuItem>
                    <MenuItem onClick={this.handleClose}>Bandarawela</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dambulla</MenuItem>
                    <MenuItem onClick={this.handleClose}>Dehiwala</MenuItem>
                    <MenuItem onClick={this.handleClose}>Galle</MenuItem>
                    <MenuItem onClick={this.handleClose}>Gampaha</MenuItem>
                    <MenuItem onClick={this.handleClose}>Homagama</MenuItem>
                    <MenuItem onClick={this.handleClose}>Horana</MenuItem>
                    <MenuItem onClick={this.handleClose}>Ja-Ela</MenuItem>
                    <MenuItem onClick={this.handleClose}>Kandy</MenuItem>
                    <MenuItem onClick={this.handleClose}>Katharagama</MenuItem>
                    <MenuItem onClick={this.handleClose}>Kegalle</MenuItem>
                    <MenuItem onClick={this.handleClose}>Kurunegala</MenuItem>
                    <MenuItem onClick={this.handleClose}>Maharagama</MenuItem>
                    <MenuItem onClick={this.handleClose}>Matara</MenuItem>
                    <MenuItem onClick={this.handleClose}>Nugegoda</MenuItem>
                    <MenuItem onClick={this.handleClose}>Nuwara-Eliya</MenuItem>
                    <MenuItem onClick={this.handleClose}>Panadura</MenuItem>
                    <MenuItem onClick={this.handleClose}>Puttalam</MenuItem>
                    <MenuItem onClick={this.handleClose}>Ragama</MenuItem>
                    <MenuItem onClick={this.handleClose}>Rathmalana</MenuItem>
                    <MenuItem onClick={this.handleClose}>Rathnapura</MenuItem>
                    <MenuItem onClick={this.handleClose}>Suriyaweva</MenuItem>
                    <MenuItem onClick={this.handleClose}>Sevanagala</MenuItem>
                    <MenuItem onClick={this.handleClose}>Waskaduwa</MenuItem>
                    <MenuItem onClick={this.handleClose}>Weeravila</MenuItem>
                    <MenuItem onClick={this.handleClose}>Wellavaya</MenuItem>
                    <MenuItem onClick={this.handleClose}>Yakkala</MenuItem>
                </Menu>
        
        </div>
        
        
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
          label="Distance to Shop from Your Home"
          onChange={handleChange('distance')}
          defaultValue={values.distance}
          variant="outlined"
          helperText="Choose the Distance type from the Given List and Type Correctly that Particular Distance"
          autoComplete={values.distance}
        />
      </Grid> 
      
      </FormControl>
      </Container>
      </div>
        
      <div>
      <div className="container4">

                  <Typography variant="h7" color="textSecondary"  paragraph>
                    Distance List
                  </Typography> 
                
                  <Typography variant="h9" color="textPrimary"  paragraph>
                    Below 1km
                    <hr/>
                    1km-2km
                    <hr/>
                    2km-5km
                    <hr/>
                    5km-10km
                    <hr/>
                    10km-20km
                    <hr/>
                    20km-40km
                    <hr/>
                    Over 40km (We are Unable to Transport)
                  </Typography> 
                  
                
        
        </div>
        
        
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
          label="Duration"
          onChange={handleChange('timeDuration')}
          defaultValue={values.timeDuration}
          variant="outlined"
          helperText="Correctly Type Here the Due Date that You are Expecting to Get this Product. Please Use this Time-Format (ex: 2021/12/12) "
          autoComplete={values.timeDuration}
        
        />

      </Grid> 
      
      </FormControl>
      </Container>
      </div>
      </div>


      <br />

            <Button
              color="secondary"
              variant="contained"
              style={{marginLeft:590,}}
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              style={{marginLeft:10,}}
              onClick={this.continue}
            >Next</Button>


    </div>
  );
}
}

export default BranchDistanceDuration;