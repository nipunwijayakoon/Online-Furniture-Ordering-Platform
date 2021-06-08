import React from 'react';  
import { Table,Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography'; 
import axios from 'axios';  
import './ManageDesign.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://projectbackendlankafurnituremakers.azurewebsites.net/api/Emplo/';  
  
class ManageDesignImage extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           d_images:[],  
           response: {}, 
           value: '', 
           
        }  
    } 
    
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      event.preventDefault();
    }

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    d_images:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteDImage(emploID) {  
      const { d_images } = this.state;     
     axios.delete(apiUrl   + emploID).then(result=>{  
       alert('Image Details Removed Successfully!!!');   
        this.setState({  
          response:result,  
          d_images:d_images.filter(d_image=>d_image.emploID !== emploID)  
        });  
      });  
    }  
   
 

      
    render(){         
        const{error,d_images}=this.state;  
        if(error){  
            return(  
                <div className="center"><h4>Error : {error.message}!!!</h4></div>  
            )  
        }  
        else  
        {  
            return(  
         <div style={{ backgroundImage: "url('https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')" , backgroundSize: "initial"}}>  
              
              <Container>

                <Typography variant="h1" color="textPrimary"  paragraph>
                    ``
                </Typography>

              </Container>
              
              <Container>
                 <div className="filter_newdesign">
                <form onSubmit = {this.handleSubmit}>
                  <label>
                    Enter Design Code :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  </form>
                  </div>
                </Container>
                
                <div > 
                  <br/> 
                  <div className='topic'>
                    <h2>NEW DESIGN IMAGE DETAILS</h2>
                  </div>
                <br/>


                
                <div className='order_status'>
                    <h3>If You are Rejecting an Order Please Put a Deleted Notice on Relevant Design Code</h3>
                    <Link to='/deletenotice'>DELETE NOTICE</Link>

                    <h3>If You are Confirming an Order Please Put a Confirmation Notice with Payment Details on Relevant Design Code</h3>
                    <Link to='/confirmnotice'>CONFIRMATION NOTICE</Link>
                  </div>
                <br/>


               
                <div style={{ backgroundImage: "url('https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
                  <Table border-collapse=" collapse" alignItems="center">  
                      
                      <tr className="raw" >  
                        <th>Image</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                        <th>Download Image</th>
                        <th>Design Code</th> 
                        <th>  </th>
                        <th>Image Name</th> 
                        <th>  </th> 
                        <th>Reject</th>
                        
                      </tr>  
                    
                    <tbody >  
                      {d_images.filter((d_image)=>(d_image.newDesignCode == this.state.value)).map(d_image => (  
                        <tr key={d_image.emploID} style={{   border: '2px solid DimGrey'}}>  
                          <td><img src ={`https://blobuploadimages.blob.core.windows.net/testcontainer/${d_image.imageName_}`} className="pic-new-card"/></td>
                          
                          <td> </td>
                          <td> </td>
                          <td> </td>
                          <td className='green_td'><Button href={`https://blobuploadimages.blob.core.windows.net/testcontainer/${d_image.imageName_}`}
                           style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}> Download </Button>
                          <br />
                          <br />

                           Click here and download Design Image from the browser
                           </td>
                           
                          
                          <td>{d_image.newDesignCode}</td>
                          <td>  </td> 
                          <td>{d_image.imageName_}</td>
                          <td> </td>

                         
                          <td className='redxx_td'><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteDImage(d_image.emploID)}>Delete Order</Button> 
                           <br />
                           If you reject-- Put a Delete_Notice, before Deleting
                          </td>

                        </tr>  
                      ))}  
                    </tbody>
                      
                  </Table>
                  </div> 
                  
                  </div>

                  <br/>


                  <div>
                 <Typography component="h8" variant="h1" color="textPrimary" gutterBottom>
                        `
                </Typography> 
                </div>

                  <Container> 
                  <div>
                  <Link to='/managenewdesign'>
                       <Button style={{ Size: '20px', minWidth: '200px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center'}}> Back to Design Details</Button>
                   </Link>
                   <Link to='/managedesignpayment'>
                       <Button style={{Size: '20px', minWidth: '200px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center'}}> Go To Payments</Button>
                   </Link>
                   </div>
                   </Container> 
                </div>  
              )  
        }  
    }  
}  
  
export default ManageDesignImage;  