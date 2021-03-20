import React, {Component} from 'react';
import axios from 'axios';
import './Employee.css';
import { Link } from 'react-router-dom';

class Get extends Component{


   state ={
        persons :[]
    }

    componentDidMount() {
        axios.get('https://localhost:5001/api/Employees').then(res => {console.log("new",res);
        this.setState({persons:res.data});
    
        })
    }

    render(){
        return(
            <div className="Get">

        <header className="Get-header">

            <h1 className="Get-title">Employee Details</h1>

         </header>  

         <Link to='/AddEmployee'>
                <button >
                    Add new Employee
                </button>
            </Link> 
        
             <table id="employee">
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
                        <td>{persons.employeeID}</td>
                        <td>{persons.employeeFirstName}</td>
                        <td>{persons.employeeLastName}</td>
                        <td>{persons.employeeEmail}</td>
                        <td>{persons.employeeTellnumber}</td>
                        <td>{persons.employeeTown}</td>
                    </tr>
                    )}
                
            </table>

            

           </div>

        );
    }
}


export default Get