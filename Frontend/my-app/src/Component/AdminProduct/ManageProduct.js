import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
import './ManageProduct.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://localhost:5001/api/Product/';  
  
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
  
      
DeleteProduct(productID) {  
      const { products } = this.state;     
     axios.delete(apiUrl   + productID).then(result=>{  
       alert('Product deleted successfully!!!');   
        this.setState({  
          response:result,  
          products:products.filter(product=>product.productID !== productID)  
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
                    <h2>PRODUCT DETAILS</h2>
                    <Link to='/ProductList'>
                       <Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> ADD PRODUCT</Button>
                   </Link>
                  </div>
                  <div>
                  
                   </div>
                <br/>
                  <Table border-collapse=" collapse">  
                   
                      <tr className="raw" marginLeft="50px" marginRight="50px">  
                      
                        <th>Image</th> 
                        
                        <th>Product Name</th> 
                        <th>Description</th>
                        
                        <th>Content</th>
                      
                        <th>Price</th> 
                       
                        <th>Delete Product</th>
                      
                      </tr>  
                    
                    <tbody >  
                      {products.map(product => (  
                        <tr key={product.productID} style={{   border: '2px solid DimGrey'}}>  
                        
                          <td><img src ={product.imageSrc} className="poto"/></td>  
                          
                          <td>{product.productName}</td>
                          <td>{product.description}</td> 
                        
                         <td>                           {product.content}</td>
                        
                          <td> <span></span>                                                                   Rs.  {product.price}</td>  
                           <td><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteProduct(product.productID)}>Delete</Button></td>  
                          
                        </tr>  
                      ))}  
                    </tbody>  
                  </Table> 
                  </div> 
                  <br/>  
                 </div>  
              )  
        }  
    }  
}  
  
export default ManageProduct;  