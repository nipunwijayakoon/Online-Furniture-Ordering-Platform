import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios';  
import './ManageProduct.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://localhost:5001/api/Items/';  
  
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
       alert('Product deleted successfully!!!');   
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
         <div >  
              
                <div > 
                  <br/> 
                  <div className='topic'>
                    <h2>PRODUCT DETAILS</h2>
                    <Link to='/ProductList'>
                       <Button style={{ backgroundColor: 'Green',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> ADD PRODUCT</Button>
                   </Link>
                  </div>
                  <div>
                  
                   </div>
                <br/>
                  <Table border-collapse=" collapse">  
                   
                      <tr className="raw">  
                        <th>Image</th> 
                        <th>Product Name</th> 
                        <th>Content</th>
                        <th>Description</th>
                        <th>Price</th> 
                        <th>Delete Product</th>
                      </tr>  
                    
                    <tbody >  
                      {products.map(product => (  
                        <tr key={product.itemID} style={{   border: '2px solid DimGrey'}}>  
                          <td><img src ={`https://localhost:5001/${product.src}`} className="imgcard"/></td>  
                          <td>{product.title}</td>
                          <td>{product.content}</td>
                          <td>{product.description}</td>  
                          <td>{product.price}</td>  
                           <td><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteProduct(product.itemID)}>Delete</Button></td>  
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