import React,{Component} from 'react'
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';


export class Barchart  extends Component{
    constructor(props){
        super(props);
        this.state = {Data:{}};
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/BranchCharts')
            .then(res =>{
                console.log(res);
                const ipl = res.data;
                let designAmount = [];
                let branchnName = [];
                ipl.forEach(element => {
                    designAmount.push(element.designAmount);
                    branchnName.push(element.branchnName);
                    
                });

                this.setState({
                    Data:{
                        labels:branchnName,
                        datasets:[
                            {
                                labels: 'Branch',
                                data: designAmount,
                                backgroundColor: [
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",
                                    "#b30000",

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
               


                <Bar 
                data = {this.state.Data}
                width={600} 
                height={250}
                />

                <Link to='/SellerDetails'>
                    <button >
                        Seller Details
                    </button>
                </Link>


            </div>
        )
    }
}

export default Barchart 