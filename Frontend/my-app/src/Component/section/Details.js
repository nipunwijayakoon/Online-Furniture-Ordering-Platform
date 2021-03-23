import React, {useState , useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../css/Details.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import CartIcon from '../svg/shopping-cart-solid.svg'



function Details(props){
    
    const [products, setProducts] = useState([]);
    const {itemID } = useParams()
    const [cart, setCart] = useState([])
    const [product, setProductList] = useState([])
    
useEffect(() => {
        axios.get(
            `https://localhost:5001/api/Items/${itemID}`
          )
          .then(res => {
            setProducts(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
      
      
const addCart = (id) =>{
    const check = cart.every(item =>{
            return item.itemID !== id
        })
        if(check){
            const data = product.filter(product =>{
                return product.itemID === id
            })
            setCart([...cart, ...data])
            
        }else{
            alert("This product has been already added to cart.")
            
        }
    } 

useEffect(() =>{
    const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
     },[])
 
useEffect(() =>{
         localStorage.setItem('dataCart', JSON.stringify(cart))
     },[cart])
 
    
useEffect(() => {
        refreshProductList();
    })
    
    
const productAPI = (url = 'https://localhost:5001/api/Items/') => {
        return {
            fetchAll: () => axios.get(url),
         
        }
    }

function refreshProductList() {
        productAPI().fetchAll()
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => console.log(err))
    }
   
 return (
           <div >
                   
                    
                   <div className="cart-icon ">   
                        <Link to='/cart'>  
                            <img src={CartIcon} alt="" width="40" /> 
                            <span >{cart.length}</span>   
                            </Link> 
                        </div>  
                 
           
                    <div className="details" key={products.itemID}>
                        
                           <Link to={`/product/${products.itemID}`}>
                               <img src={`https://localhost:5001/${products.src}`} alt=""/>
                           </Link>
                            <div className="box">
                                <div className="row">
                                    <h2> {products.title}</h2>
                                    <span>LKR {products.price}</span>
                                </div>
                                <p>{products.description}</p>
                                <h3>{products.content}</h3><br/>
                                <button  onClick={() => addCart(products.itemID)}>ADD CART</button>
                            </div>
                    </div>
                     
            </div>
                    
        )
}
export default Details
