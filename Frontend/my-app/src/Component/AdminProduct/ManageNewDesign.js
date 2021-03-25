import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios'; 
import Container from '@material-ui/core/Container';   
import './ManageDesign.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://localhost:5001/api/NewDesigns/';  
  
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
  
      
    DeleteProduct(itemID) {  
      const { products } = this.state;     
     axios.delete(apiUrl   + itemID).then(result=>{  
       alert('Order Removed Successfully!!!');   
        this.setState({  
          response:result,  
          products:products.filter(product=>product.itemID !== itemID)  
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
                    <h2>NEW DESIGN UPLOAD DETAILS</h2>
                  </div>
                <br/>
                
                <Container>
                  <Table border-collapse=" collapse">  
                   
                      <tr className="raw" background="/images/img-4.jpg">  
                        {/* <th>Image</th>  */}

                        <th>Branch</th>

                        <th>Design Code</th> 
                        <th>Wood Type</th> 
                        <th>Color</th>   
                        
                        <th>Duration</th>
                        <th>Distance to Home</th>

                        <th>Person Name</th> 
                        <th>Address</th>
                        <th>Email</th>
                        <th>Telephone</th> 
                        
                          
                          
                         
                        <th>Reject</th>
                        
                      </tr>  
                    
                    <tbody >  
                      {products.map(product => (  
                        <tr key={product.itemID} style={{   border: '2px solid DimGrey'}}>  
                          {/* <td><img src ={`https://localhost:5001/${product.src}`} className="piccard"/></td>   */}
                           
                          <td>{product.branchName}</td> 
                          <td>{product.newDesignCode}</td>
                          <td>{product.woodName}</td>
                          <td>{product.woodColour}</td>
                          <td>{product.timeDuration}</td>
                          <td>{product.distance}</td>
                          <td>{product.personName}</td>
                          <td>{product.personAddress}</td>
                          <td>{product.personEmail}</td>
                          <td>{product.contactDetails}</td>  
                           
                              
                          <td><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteProduct(product.itemID)}>Reject Order</Button>  
                          
                          </td>  
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table> 
                  </Container>
                  </div> 
                  <br/>  
                  <div>
                  <Container>
                  <Link to='/managedesignimage'>
                       <Button style={{Size: '20px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center'}}> Go To Customer Images</Button>
                   </Link>
                   </Container>
                   </div>
                </div>  
              )  
        }  
    }  
}  
  
export default ManageProduct;  