import React from 'react';  
import { Table, Button} from 'react-bootstrap';  
import axios from 'axios';  
import Container from '@material-ui/core/Container'; 
import {Link} from 'react-router-dom'
  
const apiUrl = 'https://localhost:5001/api/Cartitems/'; 


 
class CustomerOrderDetail extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {
            
           error:null,  
           carts:[],  
           response: {}  
              
        }  
    }  
    handleChange = this.handleChange.bind(this);


    handleChange(event) {
      this.setState({value: event.target.value});
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
         
 

DeleteOrder(productID) {  
  const { carts } = this.state;     
 axios.delete(apiUrl   + productID).then(result=>{  
   alert('Order deleted successfully!!!');   
    this.setState({  
      response:result,  
      carts:carts.filter(cart=>cart.productID !== productID)  
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
                    <h2>ORDERED PRODUCT DETAILS</h2>
                    <Container>
                      
                 <div className="filter_newdesign">
                <form onSubmit = {this.handleSubmit}>
                  <label>
                    Enter the Order Number :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  </form>

                  </div><br/>
                  <Link to='/ProductList'>
                       <Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> ADD PRODUCT</Button>
                   </Link>
                    <span>---------------------</span>
                   <Link to='/CustomerDetails'>
                       <Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> CUSTOMER ORDER DETAILS</Button>
                   </Link>
                   <span>---------------------</span>
                    <Link to='/ManageProduct'><Button style={{ backgroundColor: 'Khaki',border: '2px solid',borderRadius: '3px', marginLeft:'4px'}}> PRODUCT DETAILS</Button></Link>
                  
                </Container>
                  </div>
                       <div style={{ backgroundColor: 'LightGrey', margin: '5px 5px'}} >  
                       
                         <Table striped bordered hover variant="dark">  
                           <thead className="btn-primary">  
                             <tr>  
                               <th>Order Number</th> 
                              <th>Product Image</th>
                               <th>Name</th>  
                               <th>Description</th>
                               <th>Count</th>  
                               <th> Branch</th>
                               <th>Price</th>
                               <th>Total Amount of each product</th>
                             
                                 
                              
                               
                             </tr>  
                           </thead>  
                           <tbody>  

                           {carts.filter((cart)=>(cart.designcode == this.state.value)).map(cart => (  
                        <tr key={cart.productID} style={{   border: '2px solid DimGrey'}}> 
                             
                             
                                <td>{cart.designcode}</td>
                                <td><img src ={cart.imageSrc} className="poto"/></td>  
                                 <td><span>{cart.productName}</span></td>  
                                 <td>{cart.description}</td> 
                               
                                 <td>{cart.count}</td>  
                                 
                                 <td>{cart.branch}</td>
                                 <td>{cart.price}</td>
                                 <td>{cart.total}</td>
                                 
                                     
                                 
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
         
       export default CustomerOrderDetail
            
