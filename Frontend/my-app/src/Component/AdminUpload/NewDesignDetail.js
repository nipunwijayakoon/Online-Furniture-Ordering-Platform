//import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import axios from 'axios';
import React,{Component} from 'react';
import './NewDesignDetail.css';
import ReactDOM from 'react-dom';
import { TextareaAutosize } from '@material-ui/core';



class NewDesignDetail extends Component {

	state = {

	
	selectedFile: null
	};
	
	onFileChange = event => {
	
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	onFileUpload = () => {

	const formData = new FormData();
	

	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	console.log(this.state.selectedFile);
	
	axios.post("https://localhost:44335/api/Items", formData);
	};

	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div className="Details">
			<h3>File Details:</h3>
            <div className="Details">	
<p>File Name: {this.state.selectedFile.name}</p>

			
<p>File Type: {this.state.selectedFile.type}</p>


<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
</div>
		</div>
		);
	} else {
		return (
            
		<div>
			<br />
			<h4>Choose before Pressing the Upload button</h4>
            
		</div>
        
		);
	}

	};
    
	
	render() {
       	
	return (
      
        <div className="a">
            <Grid justify="center">
        <div >
            <h2>UPLOAD A PRODUCT</h2>
          </div> 
          </Grid> 
            <div className="p">
             <br/>   
            <h4>
                
              Choose a furniture photo
            </h4>
            </div>
            <div>
                <input type="file" onChange={this.onFileChange} />
                
            </div>
          {this.fileData()}
        <div>
        <TextField required id="standard-required" label="Title" defaultValue="" 
        helperText="Add the title for the furniture here" fullWidth/>
       
      </div>
      <div>
      <TextField required id="standard-required" label="Description" defaultValue="" 
      helperText="Add the short description of the furniture here" fullWidth/>
        
      </div>
      
      <div>
        
        <TextField
          id="standard-multiline-static"
          label="Content"
          multiline
          rows={5}
          defaultValue=""
          fullWidth
          helperText="Add the whole content about the furniture here"
        />
      </div>
<br/>
      <div>
      
      <TextField
          required
          id="outlined-required"
          label="Price"
          defaultValue=""
          variant="outlined"
          helperText="Add the price of the furniture"
          fullWidth
        />
        
      </div>
      <br/>
      <div>
       
        <TextField
          required
          id="outlined-required"
          label="Color"
          defaultValue=""
          variant="outlined"
          helperText="Add the color of the furniture"
          fullWidth
        />
        
      </div>
      <br/>
      
      <Grid container spacing={30} justify="center">
                <Grid></Grid>
                <Grid item>
                  <Button variant="contained" color="inherit" variant="contained" >
                   Upload Product
                  </Button>
                  
                </Grid>
                <br/>
      
</Grid>
     
		</div>
        
	);
	}
}


export default NewDesignDetail;
