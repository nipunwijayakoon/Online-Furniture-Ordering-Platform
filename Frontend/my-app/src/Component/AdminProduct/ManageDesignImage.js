import React from 'react';  
import { Table,Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container';  
import axios from 'axios';  
import './ManageDesign.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://localhost:5001/api/Emplo/';  
  
class ManageDesignImage extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           d_images:[],  
           response: {},  
           
        }  
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
                <div className="col-md-2 design-search">
                    <input type="search"
                        className="form-control" placeholder={'Enter the "Design Code" you are looking for...'} /*onChange={nameFilter}*//>
                </div>
                </Container>
                
                
                <div > 
                  <br/> 
                  <div className='topic'>
                    <h2>NEW DESIGN IMAGE DETAILS</h2>
                  </div>
                <br/>
               
                <div style={{ backgroundImage: "url('https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
                  <Table border-collapse=" collapse" alignItems="center">  
                      
                      <tr className="raw" >  
                        <th>Image</th>

                        <th>Download Image</th>

                        <th>Design Code</th> 
                        <th>Image Name</th> 
                        <th>Image Src</th> 
                          
                         
                        <th>Reject</th>
                        
                      </tr>  
                    
                    <tbody >  
                      {d_images.map(d_image => (  
                        <tr key={d_image.emploID} style={{   border: '2px solid DimGrey'}}>  
                          <td><img src ={`https://localhost:5001/Images/${d_image.imageName_}`} className="pic-new-card"/></td>

                          <td><Button href={`https://localhost:5001/Images/${d_image.imageName_}`}
                           style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}>Download</Button></td>
                           
                          <td>{d_image.newDesignCode}</td> 
                          <td>{d_image.imageName_}</td>
                          <td>{d_image.imageSrc_}</td>

                          <td><Button href={`https://localhost:5001/Images/${product.imageName_}`}> Download Order</Button></td>
                          <td><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteProduct(d_image.emploID)}>Delete Order</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>
                      
                  </Table>
                  </div> 
                  
                  </div>

                  <br/>

                  <Container> 
                  <div>
                  <Link to='/managenewdesign'>
                       <Button style={{ Size: '20px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center'}}> Back to Design Details</Button>
                   </Link>
                   </div>
                   </Container> 
                </div>  
              )  
        }  
    }  
}  
  
export default ManageDesignImage;  