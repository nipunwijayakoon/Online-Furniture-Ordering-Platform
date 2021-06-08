import React, {Component} from 'react';
import '../Get2/Get2.css';
import './GetSeller.css';
import axios from 'axios';
import { ExportCSV } from '../Get2/ExportCSV';
import {Link} from 'react-router-dom'


class Get extends Component {

    state ={
    
        //repos:null
        persons :[]
    
    
    }
    
    
    componentDidMount() {
        axios.get(`https://localhost:5001/api/ShopLists`).then(res => { console.log("new",res);
            this.setState({persons:res.data});
    
        })
    }
    
    
        
    
       
    render(){
    
    
        return(
    
            <section>
                 
                
                <div class="tbl-header">
                <h1>SELLER DETAILS</h1>
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Tell Number</th>
                                <th>Shop Name</th>
                                <th>Shop Location</th>
                            </tr>
                        </thead>
                    </table>
                </div>
    
    
                <div class="tbl-content">
                    
                    
                    
                         {this.state.persons.map(persons =>
                         <table cellpadding="0" cellspacing="0" border="0">
                         <tbody>
    
                             <tr>
                                <td>{persons.shopId}</td>
                                <td>{persons.sellerFirstName}</td>
                                <td>{persons.sellerLastName}</td>
                                <td>{persons.sellerEmail}</td>
                                <td>{persons.telNumber}</td>
                                <td>{persons.name}</td>
                                <td>{persons.area}</td>
                               
                             </tr>
    
                             </tbody>
    
                    </table>
    
                            )}                    
                </div>
                <div >
                    <button class = "button">
                        <ExportCSV  csvData={this.state.persons} fileName={this.state.CustomerDetails}>Download</ExportCSV>
                    </button>
                    <button class = "button">
                        <Link to='/asaseller'> ADD SELLER </Link>
                    </button>
                </div>

              

                
            </section>
            
            
            
            
        );
    
    }
    
    }
    
    
    
    
    export default Get