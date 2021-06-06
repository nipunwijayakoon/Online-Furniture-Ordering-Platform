import React from 'react';  
import { Table, Button} from 'react-bootstrap';  
import axios from 'axios';  
import {Link} from 'react-router-dom'

  
const apiUrl = 'https://localhost:5001/api/BillingInfo/';  
  
class CustomerDetails extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           carts:[],  
           response: {}  
              
        }  
    }  

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                  carts:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    } 
         
DeleteOrder(billingId) {  
  const { carts } = this.state;     
 axios.delete(apiUrl   + billingId).then(result=>{  
   alert('Order deleted successfully!!!');   
    this.setState({  
      response:result,  
      carts:carts.filter(cart=>cart.billingId !== billingId)  
    });  
  });  
}   

      
     
   
 
      
    render(){         
        const{error,carts}=this.state;  
       
      
        if(error){  
            return(  
                <div className="center"><h4>Error : {error.message}!!!</h4></div>  
            )  
        }  
        else  
        {  
            return(  
              <div style={{ backgroundImage: "url('https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>   
                  <div className='topic'>
                    <h2>ORDER DETAILS</h2>
                    <Link to='/customerorderdetail'><Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}>VIEW ORDERED PRODUCTS</Button></Link>
                    <span>---------------------</span>
                    <Link to='/ManageProduct'><Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}>PRODUCT DETAILS</Button></Link>
                    <span>---------------------</span>
                    <Link to='/ProductList'>
                       <Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> ADD PRODUCT</Button>
                   </Link>
          </div>
                       <div style={{ backgroundColor: 'LightGrey', margin: '5px 5px'}} >  
                       
                         <Table striped bordered hover variant="dark">  
                           <thead className="btn-primary">  
                             <tr>  
                               <th>Order Number</th> 
                               <th>Bill Date</th>
                               <th>Name</th>  
                              
                               <th>Email</th>   
                               <th></th>
                               <th> Telephone Number</th>
                               <th>Address</th>
                               <th>City</th> 
                               <th>Distance from branch to destination (km)</th>
                               <th>Delivery charge (Rs.)</th>
                               <th>Amount (Rs.)</th>
                                
                                 
                              
                               
                             </tr>  
                           </thead>  
                           <tbody>  
                             {carts.map(product => (  
                               <tr key={product.billingId}>  
                                 <td>{product.designcode}</td>
                                 <td>{product.billDate}</td>  
                                 <td>{product.cardName}</td> 
                                
                                 <td>{product.email }</td> 
                                 <td>{ }</td> 
                                 <td>          {product.tele}</td>
                                 <td>{product.address}</td>
                                 <td>{product.city}</td>
                                 <td>{product.distance}</td>
                                 <td>{product.distance *100}</td>
                                 <td>{product.totalPrice/100 + product.distance*100}</td>
                                 
                                     
                                 
                               </tr>  
                             ))}  
                           </tbody>  
                         </Table> 
                         </div>   
                       </div>  
                     )  
               }  
           }  
       }  
         
       export default CustomerDetails
            
