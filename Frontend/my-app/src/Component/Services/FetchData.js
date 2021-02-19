import React from 'react';
import axios from 'axios';





export default class ShopList extends React.Component {

  

state ={

  Customers : []
}

componentDidMount(){
  axios.get("https://localhost:5001/api/Customers")
  
  .then(res =>{
    console.log(res);
    this.setState({Customers:res.data});

  })

}

render(){

  








   
  return(<ul>{this.state.Customers.map(Customer =>
    

      <li key={Customer.customerID}>{Customer.customerFirstName}</li> ) }


      </ul>
    
     
     
     
)
}

}



