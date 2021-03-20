import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import axios from 'axios';



export class Details extends Component {
    static contextType = DataContext;
   
    constructor(props) {
        super(props);
        this.state = { product: [] } 
    }

    async componentDidMount() {
        
        try {
            var id =this.props.match.params.id;
            const res = await axios.get(`https://localhost:5001/api/Items/${id}`);
            console.log("he, he", res.data);
            this.setState({ products: res.data });
            //this.state.products.id = res.data;
            console.log("uu", res.data);
        } catch (error) {
            console.log('er er', error)
        }
    
    
this.getProduct();
    
     }
    

    getProduct = ()=> {
       
            if(this.props.match.params.id){
           const res = this.context.products;
           
            const data = res.filter(item =>{
                return item.itemID === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };


    // componentDidMount(){
    //     this.getProduct();
    // }


   
    
    render() {
        const {product} = this.state;
       const {addCart} = this.context;
        return (
            <>
                {
                   product && product.length!=0 ? product.map(item =>(
                        <div className="details" key={item.itemID}>
                           <Link to={`/item/${item.itemID}`}>
                               <img src={`https://localhost:5001/${item.src}`} alt=""/>
                           </Link>
                            <div className="box">
                                <div className="row">
                                    <h2> <Link to={`/item/${item.itemID}`}>{item.title}</Link></h2>
                                    <span>LKR {item.price}</span>
                                </div>
                                <Colors colors={item.colors}/>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <Link to="/cart" className="dcart" onClick={() => addCart(item.itemID)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                :''}
            </>
        )
    }
}

export default Details
