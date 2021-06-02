import React,{Component} from 'react'
import axios from 'axios';
import {Pie} from 'react-chartjs-2';

export class Piechart2 extends Component{
    constructor(props){
        super(props);
        this.state={Data1:{}};
    }

    componentDidMount(){
        axios.get('https://localhost:5001/api/DesignChart')
        .then(res =>{
            console.log("Data",res);
            const ipl1 = res.data;
            let amount = [];
            let tablename = [];
            ipl1.forEach(element => {
                amount.push(element.amount);
                tablename.push(element.tablename);
            });


            this.setState({
                Data1:{
                    labels:tablename,
                    datasets:[
                        {
                            labels:'Product',
                            data: amount,
                            backgroundColor:[
                                "#3cb371",
                                    "#0000FF",
                                    "#9966FF",
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
                <Pie  
                data = {this.state.Data}
                width={600} 
                height={250}
                />
            </div>
        )
    }
}

export default Piechart2