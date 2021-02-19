import React, {Component} from 'react';
import './Get.css';
import axios from 'axios';
import Userform from "./Component/Services/FetchDataInput";


class Get extends Component {

state ={

    repos:null


}


    getUser= (e) => {

        e.preventDefault();
        const index= e.target.elements.ID.value;
       
        if(index){

            axios.get(`https://localhost:5001/api/Customers/${index}`)
            .then((res) => {
    
                const repos = res.data.customerEmail;
                this.setState({repos});
    
    
                const repos1 = res.data.customerFirstName;
                this.setState({repos1});
    
    
    
            })

        }else return;

    }


render(){


    return(

        <div className="Get">

        <header className="Get-header">

            <h1 className="Get-title">About Shops</h1>

         </header>   
         <Userform getUser={this.getUser}/>
         {this.state.repos ? <ul>
             <br></br>
             <br></br>
             <h>Shop details</h>

             <li>
             <p>Shop name    : {this.state.repos}</p>
             
             <p>Owner Name   : {this.state.repos1}</p>

             </li>
         
         
         </ul>:
         
         <p>Please Enter known shop name</p>}
        </div>
    );

}

}





export default Get