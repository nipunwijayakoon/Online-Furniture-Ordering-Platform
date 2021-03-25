import React,{Component} from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import './Button.css';


export class Linecharts extends Component{
    constructor(props){
        super(props);
        this.state = {Data:{}};
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/Customers')
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
                                    "#3cb371",  
                                    "#0000FF",
                                    "#9966FF",
                                    "#4C4CFF",
                                    "#00FFFF",
                                    "#f990a7",
                                    "#aad2ed",
                                    "#FF00FF",
                                    "Blue",
                                    "Red" 
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
                options = {{maintainAspectRatio : false}}
                />
                <Link to='/CDetails'>
                    <button >
                        Customer Details
                    </button>
                </Link>
            </div>
        )
    }
}

export default Linecharts