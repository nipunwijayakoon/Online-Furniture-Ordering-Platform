import React,{Component} from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';


export class Piechart  extends Component{
    constructor(props){
        super(props);
        this.state = {Data:{}};
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/Chart')
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
                                    "#3cb371",
                                    "#0000FF",
                                    "#9966FF",
                                    "#4C4CFF"

                            ]

                            }
                        ]
                    }
                });
            })
    }

    

    render(){
        return(
            <div >
                <Link to='/Admindetails'>
                    <button >
                        Admin Details
                    </button>
                </Link>



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