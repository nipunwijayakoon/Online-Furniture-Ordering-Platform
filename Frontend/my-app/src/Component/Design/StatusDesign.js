import React from 'react';  
import { Table,Button } from 'react-bootstrap';  
import axios from 'axios'; 
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography';  
import './UploadNewDesign.css';  
import { Link } from 'react-router-dom';



const apiUrl1 = 'https://lankafurnituremakersapi.azurewebsites.net/api/DeletedDesigns/';  
const apiUrl2 = 'https://lankafurnituremakersapi.azurewebsites.net/api/ConfirmedDesigns/';  




class StatusNewDesign extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           designs_del:[],  
           designs_con:[], 
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
       axios.get(apiUrl1 ).then(response => response.data).then(  
            (result)=>{  
                this.setState({  
                    designs_del:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
 
        )  


        axios.get(apiUrl2 ).then(response => response.data).then(  
          (result)=>{  
              this.setState({  
                  designs_con:result  
              });  
          },  
          (error)=>{  
              this.setState({error});  
          }  


          
      )  



    }  
  
      


    render(){  
      
    


        const{error,designs_del,designs_con, total_amount, advance_amount, transportation_Amount}=this.state;  
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

                <Typography variant="h1" color="textPrimary"  paragraph>
                    ``
                </Typography>

              </Container>
              
              <Container>
                 <div className="filter_deleteddesign">
                <form onSubmit = {this.handleSubmit}>
                  <label>
                    Enter Your Design Code :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                  </label>
                  </form>
                  </div>
                </Container>


                <div > 
                  <br/> 
                  <div className='topic'>
                    <h2>UPLOADED NEW DESIGN STATUS</h2>
                  </div>
                <br/>



                
                  <Table border-collapse=" collapse">  


                      <tr className="raw" background="/images/img-4.jpg">  

                        <th>Your Design Code</th>
                        <th></th>
                        <th>Order Status</th> 
                        <th></th>
                        <th>Reason For Rejection</th> 
                        <th></th>
                     
                      </tr>  
                    
                    <tbody >  
                      {designs_del.filter((design_del)=>(design_del.input_Design_Code == this.state.value)).map(design_del => (  
                        <tr key={design_del.deleteID}style={{   border: '2px solid DimGrey'}}> 
                          
                          <td>{design_del.input_Design_Code}</td> 
                          <td></td>
                          <td>{design_del.statusof_Design}</td>
                          <td></td>
                          <td>{design_del.deleted_Reason}</td>
                          <td></td>
                        
                        </tr>  
                      ))}
                     
                    </tbody>  
                  </Table> 

                  <Typography variant="h1" color="textPrimary">
                        `
                    </Typography>

                   <Table border-collapse=" collapse">  


                      <tr className="raw" background="/images/img-4.jpg">  

                        <th>Your Design Code</th>
                        <th>Order Status</th>
                        <th>Estimated Cost for Order (LKR:)</th>
                        <th>Transportation Cost (LKR:)
                        <th className='white_th'>[km x Charge_for_1km = Amount]</th>
                        </th>
                        <th>Total Amount for Order (LKR:) </th>
                        <th>Advance Payment for Your Confirmation (LKR:)</th>
                        <th>If you satisfied, You can do Payments</th>
                        <th>Seller's Contact Number</th>
                        
                      </tr>  
                    
                    <tbody >  
                      {designs_con.filter((design_con)=>(design_con.input_Design_Code == this.state.value)).map(design_con => (  
                        <tr key={design_con.confirmID}style={{   border: '2px solid DimGrey'}}> 
                          
                          <td>{design_con.input_Design_Code}</td>
                          <td>{design_con.statusof_Order}</td>
                          <td>{design_con.estimated_Amount}</td>
                          <td>{design_con.no_of_kms} x {design_con.charge_for_km} = {design_con.no_of_kms * design_con.charge_for_km}
                          </td>
                          <td>{design_con.estimated_Amount + (design_con.no_of_kms * design_con.charge_for_km)}
                          <td className='green_td'>
                          You have to Complete this Payment to Receive the Furniture to home
                          </td>
                          </td>
                          <td>{(design_con.estimated_Amount + (design_con.no_of_kms * design_con.charge_for_km))} x {design_con.percentage_of_advance}% = {(design_con.estimated_Amount + (design_con.no_of_kms * design_con.charge_for_km)) * (design_con.percentage_of_advance / 100)}
                          <td className='blue_td'>
                          After you Pay this Advance Money, Manufacturer will start to Make your Furniture
                          </td>
                          </td>
                          <td><Button href="/newdesignpayments"
                           style={{ backgroundColor: 'ligt-green',border: '2px solid',borderRadius: '3px'}}>Payment</Button></td>
                          <td>{design_con.seller_Contact}
                          <td className='redxx_td'>
                          Contact the Seller, After doing any of your Payments
                          </td>
                          </td>

                        </tr>  
                      ))}
                     
                    </tbody>  
                  </Table> 

                  <hr />
                 
                  </div> 
                  <br/> 

                  <div className='new_order_status'>
                    <Typography component="h8" variant="h6" color="textPrimary">
                        If Your Design Code is not Available Here & neither Stated as Rejected nor Confirmed, Please be Awared that Your Order is Still on the Examining and Reading Process. If the Manufacturer Wishes to Complete Your Order Under the Given Conditions, He Will be Contacted You through Telephone or E-mail and Posted Your Order Status. 
                    </Typography>
                    <Typography variant="h6" color="Secondary">
                        Stay in Touch
                    </Typography>
                    <Typography variant="h8" color="Primary">
                        Thank You...
                    </Typography>
                  </div>
                <br/>
                


                 <div>
                 <Typography component="h8" variant="h5" color="textPrimary" gutterBottom>
                        `
                </Typography> 
                </div>  
                    

                  <div>
                  <Container>
                  <Link to='/viewdesign'>
                       <Button style={{Size: '20px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center'}}> Goto View Designs</Button>
                   </Link>
                   </Container>
                   </div>
                </div>  
              )  
        }  
    }  
}  
  
export default StatusNewDesign;  