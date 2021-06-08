import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Menu from '@material-ui/core/Menu';
import axios from "axios"

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

componentDidMount() {
  axios.get(`https://projectbackendlankafurnituremakers.azurewebsites.net/ShopLists`).then(res => { console.log("new",res);
      this.setState({persons:res.data});

  })
}

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

                <Typography component="h2" variant="h9" color="Secondary"  paragraph>
                    Please make sure to type branch name coorectly
                    <br/>
                    in *Capitalized Case* form, 
                    <br/>
                    as same as it is shown in below list.
                </Typography>
                <Container>
                <Container>
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

                </Container>
                </Container>
        
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
          label="Location of the Place, You Need to Transport"
          onChange={handleChange('location')}
          defaultValue={values.location}
          variant="outlined"
          helperText="Format: (Latitude, Longitude) & Make sure to Seperate Latitude and Longitude using a *Space*"
          autoComplete={values.location}
        />
      </Grid> 
      
      </FormControl>
      </Container>
      </div>
        
      <div>
      <div>

                  <Typography  variant="h9" color="textSecondary"  paragraph>
                    Please Enter the Location Coordinates of the Place, You Need to Transport.
                  </Typography> 
                  <Typography  variant="h7" color="textSecondary"  paragraph>
                    (Latitude, Longitude)
                  </Typography>
                
                  <Typography component="h2" variant="h9" color="textPrimary"  paragraph>
                    ex: (7.117245472370001, 80.013427734375)
                  
                  <Container component="main" maxWidth="xl">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td onClick={()=> window.open("https://www.gps-coordinates.net/","_blank")}><Button variant="contained" style={{float: 'right'}} color="secondary" marginLeft="5000px">Find Your Location Here</Button></td>
                  </Container>                                  
                  </Typography>
                  <Typography variant="h9" color="textPrimary"  paragraph>
                    Please make sure to enter this coordinates much accurately, 
                    <hr/>
                    As we're calculating the transportation cost considering this location.
                    <hr/>
                    So, choose the closest branch for giving this order.
                  </Typography> 

                  <Typography component="h2" variant="h9" color="Error"  paragraph>
                    We don't Transport to the Locations on More Than 80km From the Given Branch.
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
          label="Duration (YYYY/MM/DD)"
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