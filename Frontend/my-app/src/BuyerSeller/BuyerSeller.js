import React,{Component} from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
//import './BuyerSeller.css';


export class Piechart  extends Component{
    constructor(props){
        super(props);
        this.state = {Data:{}};
    }

    componentDidMount(){
        axios.get('https://lankafurnituremakersapi.azurewebsites.net/api/Chart')
            .then(res =>{
                console.log(res);
                const ipl = res.data;
                let amount1 = [];
                let tablename1 = [];
                ipl.forEach(element => {
                    amount1.push(element.amount);
                    tablename1.push(element.tablename);
                    
                });

                this.setState({
                    Data:{
                        labels:tablename1,
                        datasets:[
                            {
                                labels: 'Seller',
                                data: amount1,
                                backgroundColor: [
                                    "#FF0000",
                                    "#00FF00",
                                    " #0000FF",
                                    "#C12283"

                            ]

                            }
                        ]
                    }
                });
            })
    }

    

    render(){
        return(
            <div  >
               <br/>
                <div className="total">
                <Link to='/Admindetails'><h15> Admin Details</h15></Link>
                </div>

                <Pie  
                data = {this.state.Data}
                width={600} 
                height={250}
                />

                

            </div>

            
        )
    }
}

export default Piechart 