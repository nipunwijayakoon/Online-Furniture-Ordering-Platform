import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';


export class Products extends Component {
     addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item.itemID !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.itemID === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product is already in the cart ")
        }
    };
    static contextType = DataContext;
    
   

   constructor(props) {
        super(props);
        this.state = { products: [] } 
    }
    async componentDidMount() {
        //this.context.addCart();
        
        try {
            const res = await axios.get('https://localhost:5001/api/Items');
            console.log("he, he", res.data);
            this.setState({ products: res.data });
            //this.state.products = res.data;
            console.log("uu", this.state.products);
        } catch (error) {
            console.log('er er', error)
        }
    
    

    
     }

   

    render() {
    
    // const {addCart} =this.context;

    const {products} = this.state;
    const {addCart} = this;

        return (
            
            <div id="product">
                
               {
                   
                   products.map(product =>(
                       <div className="card" key={product.itemID}>
                           <Link to={`/product/${product.itemID}`}>
                               <img src={`https://localhost:5001/${product.src}`} alt=""/>
                           </Link>
                           <div className="content">
                               <h3>
                                   <Link to={`/product/${product.itemID}`}>{product.title}</Link>
                               </h3>
                               <span>LKR {product.price}</span>
                               <p>{product.description}</p>
                               {/* <button onClick={()=> addCart(product.id)}>Add to cart</button> */}
                                {/* <IconButton component={Link} to={`/cart`}  className="dcart" onClick={() => addCart{`${product.itemID}`}>
                                    Add to cart
                                </IconButton>  */}
                                <Button onClick={addCart} className={"dcart"} >Add to cart</Button>
                               
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}

export default Products;