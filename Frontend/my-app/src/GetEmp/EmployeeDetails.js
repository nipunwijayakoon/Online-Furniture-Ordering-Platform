import React, {Component} from 'react';
import axios from 'axios';
import './Employee.css';
import { Link } from 'react-router-dom';

class Get extends Component{


   state ={
        persons :[]
    }

    componentDidMount() {
        axios.get('https://lankafurnituremakersapi.azurewebsites.net/api/Admins').then(res => {console.log("new",res);
        this.setState({persons:res.data});
    
        })
    }

    render(){
        return(
           

            <div class="table-wrapper">
              

                 <h2>ADMIN DETAILS</h2>
                <table class="fl-table">
                <thead>
        <tr>
            <th>ID No</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
        </tr>
        </thead>

        <tbody>
        {this.state.persons.map(persons =>
                    <tr>
                        <td>{persons.adminId}</td>
                        <td>{persons.adminFistName}</td>
                        <td>{persons.adminLastName}</td>
                        <td>{persons.adEmail}</td>
                    </tr>
                    )}
        </tbody>
                </table>

                <Link to='/AddAdmin'>
                <button class="button">
                     New Admin
                </button>
            </Link>

            </div>

        );
    }
}


export default Get