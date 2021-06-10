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
        axios.get(`https://lankafurnituremakersapi.azurewebsites.net/api/Shops`).then(res => { console.log("new",res);
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
                                <th>Seller name</th>
                                <th>Email</th>
                                <th>Area</th>
                                
                            </tr>
                        </thead>
                    </table>
                </div>
    
    
                <div class="tbl-content">
                    
                    
                    
                         {this.state.persons.map(persons =>
                         <table cellpadding="0" cellspacing="0" border="0">
                         <tbody>
    
                             <tr>
                                <td>{persons.shopID}</td>
                                <td>{persons.shopName}</td>
                                <td>{persons.shopEmail}</td>
                                <td>{persons.shopOwnerName}</td>
                             </tr>
    
                             </tbody>
    
                    </table>
    
                            )}                    
                </div>
                <div >
                    <button class = "button">
                        <ExportCSV  csvData={this.state.persons} fileName={this.state.SellerDetails}>Download</ExportCSV>
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