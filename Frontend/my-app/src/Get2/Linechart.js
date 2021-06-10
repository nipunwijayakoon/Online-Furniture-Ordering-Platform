import React,{Component} from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
//import './Button.css';


export class Linecharts extends Component{
    constructor(props){
        super(props);
        this.state = {Data:{}};
    }

    componentDidMount(){
        axios.get('https://lankafurnituremakersapi.azurewebsites.net/api/Customers')
            .then(res =>{
                console.log(res);
                const ipl = res.data;
                let customerID = [];
                let customerTown = [];
                ipl.forEach(element => {
                    customerID.push(element.customerID);
                    customerTown.push(element.customerTown);
                    
                });

                this.setState({
                    Data:{
                        labels:customerTown,
                        datasets:[
                            {
                                labels: 'Customer registration',
                                data: customerID,
                                backgroundColour:[
                                    "#FF0000"
                                    
                            ]

                            }
                        ]
                    }
                });
            })
    }

    

    render(){
        return(
            <div>
                <Line
                data = {this.state.Data}
                width={600} 
                height={250}
                />
               
                <br/>
                <br/>
                <br/>
                <div className="total">
                <Link to='/CDetails'><h15> Customer Details</h15></Link>
                </div>

            </div>
        )
    }
}

export default Linecharts