import React, {Component} from 'react';
import './Get2.css';
import axios from 'axios';
import Userform from "./fetching";
import { ExportCSV } from './ExportCSV';


class Get extends Component {

state ={

    //repos:null
    persons :[]


}


componentDidMount() {
    axios.get(`https://localhost:5001/api/Customers`).then(res => { console.log("new",res);
        this.setState({persons:res.data});

    })
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
        
             <table id="customers">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Tell Number</th>
                    <th>Home town</th>
                </tr>
                {this.state.persons.map(persons =>
                    <tr>
                        <td>{persons.customerID}</td>
                        <td>{persons.customerFirstName}</td>
                        <td>{persons.customerLastName}</td>
                        <td>{persons.customerEmail}</td>
                        <td>{persons.customerTellnumber}</td>
                        <td>{persons.customerTown}</td>
                    </tr>
                    )}
                
            </table>
           
            <ExportCSV csvData={this.state.persons} fileName={this.state.CustomerDetails} />
    
            
        </div>
        
        
        
        
    );

}

}




export default Get