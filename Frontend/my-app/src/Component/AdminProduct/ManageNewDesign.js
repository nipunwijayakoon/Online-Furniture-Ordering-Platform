import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios'; 
import Container from '@material-ui/core/Container';   
import './ManageDesign.css';  
import { Link } from 'react-router-dom';
  
const apiUrl = 'https://localhost:5001/api/NewDesigns/';  



class ManageNewDesign extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           designs:[],  
           response: {},  
           
        }  
    }  
    

    componentDidMount(){  
       axios.get(apiUrl ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    designs:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  
    }  
  
      
    DeleteDesign(itemID) {  
      const { designs } = this.state;     
     axios.delete(apiUrl   + itemID).then(result=>{  
       alert('Order Removed Successfully!!!');   
        this.setState({  
          response:result,  
          designs:designs.filter(design=>design.itemID !== itemID)  
        });  
      });  
    }  
   
      
    render(){  
      
    


        const{error,designs}=this.state;  
        if(error){  
            return(  
                <div className="center"><h4>Error : {error.message}!!!</h4></div>  
            )  
        }  
        else  
        {  
            return(  
         <div style={{ backgroundImage: "url('https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"}}>  
              
              <Container>
                <div className="col-md-2 design-search">
                    <input type="search"
                        className="form-control" placeholder={'Enter the "Branch" you are looking for...'} /*onChange={nameFilter}*//>
                </div>
                </Container>



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
                      {designs.filter((design)=>(design.branchName == design.branchName)).map(design => (  
                        <tr key={design.itemID} style={{   border: '2px solid DimGrey'}}>  
                          {/* <td><img src ={`https://localhost:5001/${product.src}`} className="piccard"/></td>   */}
                           
                          <td>{design.branchName}</td> 
                          <td>{design.newDesignCode}</td>
                          <td>{design.woodName}</td>
                          <td>{design.woodColour}</td>
                          <td>{design.timeDuration}</td>
                          <td>{design.distance}</td>
                          <td>{design.personName}</td>
                          <td>{design.personAddress}</td>
                          <td>{design.personEmail}</td>
                          <td>{design.contactDetails}</td>  
                           
                              
                          <td><Button style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}
                           onClick={() => this.DeleteDesign(design.itemID)}>Reject Order</Button>  
                          
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
  
export default ManageNewDesign;  