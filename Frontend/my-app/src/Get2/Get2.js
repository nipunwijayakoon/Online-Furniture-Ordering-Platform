import React, {Component} from 'react';
import './Get2.css';
import axios from 'axios';
import Userform from "./fetching";


class Get extends Component {

state ={

    repos:null
    //Customer :[]


}


    getUser= (e) => {

        e.preventDefault();
        const word= e.target.elements.customerID.value;
       
        if(word){

            axios.get(`https://localhost:5001/api/Customers/${word}`)
            .then((res) => {console.log(res);
    
                const repos = res.data.customerEmail;
                this.setState({repos});
    
    
                const repos1 = res.data.customerFirstName;
                this.setState({repos1});

                const repos2 = res.data.customerLastName;
                this.setState({repos2});


                const repos3 = res.data.customerTown;
                this.setState({repos3});
    
                const repos4 = res.data.customerTellnumber;
                this.setState({repos4});

                /**const repos5 = res.data.customerPW;
                this.setState({repos5});

                const repos6 = res.data.retypeCustomerPW;
                this.setState({repos6});*/

                console.log({repos});
    
            })

        }else return;

    }

   
render(){


    return(

        <div className="Get">

        <header className="Get-header">

            <h1 className="Get-title">Customer Details</h1>

         </header>   
         <Userform getUser={this.getUser}/>
         {this.state.repos ? <ul>
             <br></br>
             <br></br>
             <h>Customer details</h>

             

             <li>
             <p>Customer First Name    : {this.state.repos1}</p>
             
             <p>Customer Last Name   : {this.state.repos2}</p>


             <p>Email   : {this.state.repos}</p>

             <p>Town   : {this.state.repos3}</p>
             <p>Contact Number   : {this.state.repos4}</p>
             
             </li>
         
         
         </ul>:
         <ul>
         <p>Enter custormer ID</p>
         
         
         </ul>}
         
        </div>
    );

}

}




export default Get