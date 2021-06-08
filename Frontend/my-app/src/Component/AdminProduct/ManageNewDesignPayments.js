import React from 'react';  
import { Table,Button } from 'react-bootstrap';
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography'; 
import axios from 'axios';  
import './ManageDesign.css';  
import { Link } from 'react-router-dom';
  
const apiUrl1 = 'https://lankafurnituremakersapi.azurewebsites.net/api/BillingNewDesign/';
const apiUrl2 = 'https://lankafurnituremakersapi.azurewebsites.net/api/ConfirmedDesigns/';  
  
class ManageDesignPayment extends React.Component{  
    constructor(props){  
        super(props);  
        this.state = {  
           error:null,  
           d_payments:[],
           d_pay_details:[],  
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
                    d_payments:result  
                });  
            },  
            (error)=>{  
                this.setState({error});  
            }  
        )  

        axios.get(apiUrl2 ).then(response => response.data).then(  
          (result)=>{  
              this.setState({  
                  d_pay_details:result  
              });  
          },  
          (error)=>{  
              this.setState({error});  
          }  
      )  
    }  
  
 
    render(){         
        const{error,d_payments,d_pay_details}=this.state;  
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
                    <h2>NEW DESIGN PAYMENT DETAILS</h2>
                  </div>
                <br/>


                
                <div className='order_status'>
                    
                    <h3>If the Customer is done the Advance Payment, You can Start to Make the Furniture </h3>
                    <h3>If Only the Customer Completed Full Payment, Furniture can be Transported to Given Destination</h3>
                    <br />
                    <h4>If the Upper Table is Empty, It means still No Any Payment is done by the Customer Regarding this Order</h4>
                  </div>
                <br/>


               
                <div style={{ backgroundImage: "url('https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" ,backgroundSize: "cover"}}>
                  <Table border-collapse=" collapse" alignItems="center">  
                      
                      <tr className="raw" > 
                        <th>         </th> 
                        <th>Design Code</th>
                        <th>         </th>
                        <th>Billing Date</th>
                        <th>         </th>
                        <th>Payment Info</th>
                        <th>         </th>
                        <th>Paid Amount</th>
                        <th>         </th>
                      
                      </tr>  
                    
                    <tbody >  
                      {d_payments.filter((d_payment)=>(d_payment.newdesigncode == this.state.value)).map(d_payment => (  
                        <tr key={d_payment.billingID} style={{   border: '2px solid DimGrey'}}>  
                          
                          <td>      </td> 
                          <td>{d_payment.newdesigncode}</td>
                          <td>      </td> 
                          <td>{d_payment.billDate}</td>
                          <td>      </td> 
                          <td>{d_payment.payInfo}</td>
                          <td>      </td>
                          <td>{d_payment.totalPrice /100}</td>
                          <td>      </td>

                        </tr>  
                      ))}  
                    </tbody>
                      
                  </Table>
                  </div>
                  <Typography variant="h1" color="textPrimary">
                        `
                    </Typography>

                   <Table border-collapse=" collapse">  


                      <tr className="raw" background="/images/img-4.jpg">  

                        <th>Design Code</th>
                        <th>Order Status</th>
                        <th>Estimated Cost for Order (LKR:)</th>
                        <th>Transportation Cost (LKR:)
                        <th className='white_th'>[km x Charge_for_1km = Amount]</th>
                        </th>
                        <th>Total Amount for Order (LKR:) </th>
                        <th>Advance Payment for Customer (LKR:)</th>
                        <th>Seller's Contact Number</th>
                        
                      </tr>  
                    
                    <tbody >  
                      {d_pay_details.filter((d_pay_detail)=>(d_pay_detail.input_Design_Code == this.state.value)).map(d_pay_detail => (  
                        <tr key={d_pay_detail.confirmID}style={{   border: '2px solid DimGrey'}}> 
                          
                          <td>{d_pay_detail.input_Design_Code}</td>
                          <td>{d_pay_detail.statusof_Order}</td>
                          <td>{d_pay_detail.estimated_Amount}</td>
                          <td>{d_pay_detail.no_of_kms} x {d_pay_detail.charge_for_km} = {d_pay_detail.no_of_kms * d_pay_detail.charge_for_km}
                          </td>
                          <td>{d_pay_detail.estimated_Amount + (d_pay_detail.no_of_kms * d_pay_detail.charge_for_km)}
                          </td>
                          <td>{(d_pay_detail.estimated_Amount + (d_pay_detail.no_of_kms * d_pay_detail.charge_for_km))} x {d_pay_detail.percentage_of_advance}% = {(d_pay_detail.estimated_Amount + (d_pay_detail.no_of_kms * d_pay_detail.charge_for_km)) * (d_pay_detail.percentage_of_advance / 100)}
                          </td>
                          <td>{d_pay_detail.seller_Contact}
                          </td>

                        </tr>  
                      ))}
                     
                    </tbody>  
                  </Table>
                  
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
                   <Link to='/managedesignimage'>
                       <Button style={{Size: '20px', minWidth: '200px', backgroundColor: 'navajowhite',border: '5px solid',borderRadius: '3px', alignItems:'center'}}> Back To Customer Images</Button>
                   </Link>
                   </div>
                   </Container> 
                </div>  
              )  
        }  
    }  
}  
  
export default ManageDesignPayment;  