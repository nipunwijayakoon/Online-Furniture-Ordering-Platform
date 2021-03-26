import React from 'react';  
import { Table,Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container';  
import axios from 'axios';  
import './ManageDesign.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://localhost:5001/api/Emplo/';  
  
class ManageProduct extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           products:[],  
           response: {},  
           
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    products:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteProduct(emploID) {  
      const { products } = this.state;     
     axios.delete(apiUrl   + emploID).then(result=>{  
       alert('Image Details Removed Successfully!!!');   
        this.setState({  
          response:result,  
          products:products.filter(product=>product.emploID !== emploID)  
        });  
      });  
    }  
   
 

      
    render(){         
        const{error,products}=this.state;  
        if(error){  
            return(  
                <div className="center"><h4>Error : {error.message}!!!</h4></div>  
            )  
        }  
        else  
        {  
            return(  
         <div style={{ backgroundImage: "url('https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>  
              
                <div > 
                  <br/> 
                  <div className='topic'>
                    <h2>NEW DESIGN IMAGE DETAILS</h2>
                  </div>
                <br/>
                <Container>
                <div >
                  <Table border-collapse=" collapse">  
                      
                      <tr className="raw" >  
                        <th>Image</th>

                        <th>Design Code</th> 
                        <th>Image Name</th> 
                        <th>Image Src</th> 
                          
                         
                        <th>Reject</th>
                        
                      </tr>  
                    
                    <tbody >  
                      {products.map(product => (  
                        <tr key={product.emploID} style={{   border: '2px solid DimGrey'}}>  
                          <td><img src ={`https://localhost:5001/Images/${product.imageName_}`} className="pic-new-card"/></td>
                           
                          <td>{product.newDesignCode}</td> 
                          <td>{product.imageName_}</td>
                          <td>{product.imageSrc_}</td>

                          <td><Button href={`https://localhost:5001/Images/${product.imageName_}`}> Download Order</Button></td>
                          <td><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteProduct(product.emploID)}>Delete Order</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>
                      
                  </Table>
                  </div> 
                  </Container>
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
  
export default ManageProduct;  