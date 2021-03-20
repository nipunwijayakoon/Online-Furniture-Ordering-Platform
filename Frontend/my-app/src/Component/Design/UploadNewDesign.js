import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Link from '@material-ui/core/Link';


import './UploadNewDesign.css';
export class NewDesign extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  state={
    profileImg:'https://st4.depositphotos.com/18664664/22483/v/1600/depositphotos_224836750-stock-illustration-kitchen-table-icon-trendy-kitchen.jpg'
  }
 
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state

		return (
			<div className="page" style={{ backgroundImage: "url('https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
				
  
        <div className="container2">
        <Container maxWidth="sm">
            
            <Typography variant="h6" align="center" color="error"  paragraph>
              Please make sure enough to upload your new design with all the measurements it has. We are very pleased if your picture is drawn in 3D view for the convenience of understanding of the receiver... 
            </Typography>

            <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
              We have provide a sample sketching here for your better awareness... 
            </Typography>

            <img src="/images/ExampleDesign.jpg"  width="320" height="320" alt=""/>

        </Container>
        </div>




        <div className="container">
          
					<h1 className="heading">Add Your New Furniture Design Here...</h1>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>

					<input type="file" accept="image/*" name="image-upload" id="input"  onChange={this.imageHandler}/>

					<div className="label">
          <label className="image-upload" htmlFor="input">
            <AddAPhotoIcon className={"label"}/>
						Choose your Picture
					</label>
          </div>

          <Grid container spacing={4} justify="center">
                <Grid item>
                  <Button variant="contained" color="inherit" variant="contained">
                    Upload
                  </Button>
                </Grid>
                </Grid>

        
       
            <br />

            <Button
              color="primary"
              variant="contained"
              style={{marginLeft:200,}}
              onClick={this.continue}
            >Continue</Button>
        
				</div>
       


      
      </div>
  
      


		);
	}
}

export default NewDesign;