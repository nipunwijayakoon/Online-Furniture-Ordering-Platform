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
        const word= e.target.elements.shopname.value;
       
        if(word){

            axios.get(`https://localhost:5001/api/Shops/${word}`)
            .then((res) => {
    
                const repos = res.data.shopName;
                this.setState({repos});
    
    
                const repos1 = res.data.shopEmail;
                this.setState({repos1});

                const repos2 = res.data.shopOwnerName;
                this.setState({repos2});


                const repos3 = res.data.shopTelNumber;
                this.setState({repos3});
    
                
    
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
             <p>Shop Name    : {this.state.repos}</p>
             
             <p>Shop Owner Name   : {this.state.repos2}</p>


             <p>Shop Email   : {this.state.repos1}</p>

             
             <p>Contact Number   : {this.state.repos3}</p>
             
             </li>
         
         
         </ul>:
         <ul>
         <p>Enter known shop ID</p>
         
         
         </ul>}
         
        </div>
    );

}

}





export default Get