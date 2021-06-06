import React, {Component} from 'react'
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './Checkout.css'
import { Form, Label,Input,FormGroup, FormFeedback } from 'reactstrap';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Table } from 'react-bootstrap';  
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import logo from '../../images/company_logo.png'; 

var total =0;
var price;

class Receipt extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            Cart:JSON.parse(localStorage.getItem('dataCart')),
            error:null,
           
            data:{
                'totalPrice':JSON.parse(localStorage.getItem('total')),
                'distance':''
            },
            response:{},
            orders:[], 
            
        }
       
    }
    
 
    
    refreshPage(){
        window.location.reload(); 
    }
   
 
    generatePDF(){
       
        html2canvas(document.getElementById('capture')).then(function(canvas){
            var doc = new jsPDF('landscape','px','a4','false')
            doc.addImage(logo,'PNG',160,60,320,280)

        doc.setFont('Arial','bold',30)
        
        doc.text(240,30,'LANKA FURNITURE MAKERS')
        doc.text(270,370,'CONTACT US')
        doc.text(180,390,'Tel: 081-2235643 Mobile: (+94) 71 3452908 / 76 9145689')
        doc.text(230,407,'lankafurniture123@gmail.com')
    
        doc.addPage()
        var imgdata = canvas.toDataURL('image/png')
      
        var pageWidth = doc.internal.pageSize.getWidth();
        var pageHeight = doc.internal.pageSize.getHeight();

        var widthRatio = pageWidth/canvas.width;
        var heightRatio = pageHeight/canvas.height;
        var ratio = widthRatio > heightRatio ? heightRatio : widthRatio;

        var canvasWidth = canvas.width*ratio;
        var canvasHeight = canvas.height*ratio;
        
        var marginX = (pageWidth-canvasWidth)/2;
        var marginY = (pageHeight-canvasHeight)/2;  
           
        doc.addImage(imgdata,'PNG', marginX, marginY, canvasWidth, canvasHeight)
      
        doc.addPage()
      
            doc.text(100,40,'Your payment is sucessfull.....')
          
            doc.text(100,80,'If the order is cancelled due to any reason, the refund will be given to you within 5-10 days.')
   
          doc.text(100,120,'If you have any douts on your order, feel free to contact us.')
            doc.save('Ordered Product Details.pdf')
            
        }) 
   }
   
    
   
  
    render(){
    
        const{Cart,error, billinginfos}=this.state;
       
        if(error){
            return(
                <div className="center"><h4>Error : {error.message}!!!</h4></div>
            )
        } else{ 
        
            return(
              
                <div className='rep'>
              
           
                    <div id = "capture">
            
              <h2>Thank You For Your Purchase!!! Your Order No. {JSON.parse(localStorage.getItem('designcode'))} Summery</h2>
            
          
 
                        <div>
                            <div>
                                <table>
                                    <thead>
                                        <tr className="btn-primary">
                                            <th> Product Name</th>
                                            
                                            <th>Branch</th>
                                            <th>Count </th>
                                            <th>Price(Rs)</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Cart.map(order =>
                                        <tr key={order.productId}>
                                            <td >
                                                <span >{order.productName}</span>
                                            </td>
                                            
                                            <td>
                                                <span>{order.branch}</span>
                                            </td>
                                            <td>
                                                <span >{order.count}</span>
                                            </td>
                                            <td >
                                                <span >{price=order.price * order.count}</span>
                                                
                                            </td>
                                           
                                        
                                        </tr>
                                         )}

                                       

                                        <tr >
                                        <td >
                                            <span ></span>
                                        </td>
                                        <td >
                                            <span><strong>TOTAL</strong></span>
                                        </td>
                                        <td >
                                            <span></span>
                                        </td>
                                        <td >
                                            <span ><strong>{this.state.data.totalPrice }</strong></span>
                                            <span hidden>{total =0}</span>
                                        </td>
                                        </tr> 

                                    </tbody>
                                
                                    </table>
                            </div>
                        </div>
                    </div>
                
                   <div className="twbutton">
                   {/* <Typography component="h3" variant ="h15" align="center">01. First generate your Product Details Document.</Typography><br/>
                   <Typography align="center">
               <Button variant="contained" color="primary" marginX="100px" onClick={this.refreshPage} >GENERATE YOUR PDF</Button><br/>
               </Typography> */}
               <Typography component="h3" variant ="h15" align="center">Download your Product Details Document.</Typography><br/>
               <Typography align="center">
               <Button variant="contained" color="secondary" onClick={this.generatePDF} >DOWNLOAD YOUR DOCUMENT</Button>
               </Typography>
            
               <Button component={Link} to='/viewdesign'  variant="contained"  color="primary"  marginRight="10px" size="small">
                      Back to Designs
                    </Button> 
                         
               </div>
                  
        </div> 
        
                 
            )
        }
        
    }

}

export default Receipt