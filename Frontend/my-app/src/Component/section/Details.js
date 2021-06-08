import React, {useState , useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../css/Details.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import CartIcon from '../svg/shopping-cart-solid.svg'
import '../css/Products.css'



function Details(props){
    
    const [products, setProducts] = useState([]);
    const {productID} = useParams()
    const [cart, setCart] = useState([])
    const [product, setProductList] = useState([])
    
useEffect(() => {
        axios.get(
            `https://projectbackendlankafurnituremakers.azurewebsites.net/api/Product/${productID}`
          )
          .then(res => {
            setProducts(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
      
      
const addCart = (id) =>{
    const check = cart.every(item =>{
            return item.productID !== id
        })
        if(check){
            const data = product.filter(product =>{
                return product.productID === id
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
    
    
const productAPI = (url = 'https://projectbackendlankafurnituremakers.azurewebsites.net/api/Product/') => {
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
          
             <section>  
            
           <br/>
                   <div className="cart-icon " >   
                        <Link to='/cart'>  
                            <img src={CartIcon} alt="" width="40"/> 
                            <span >{cart.length}</span>   
                            </Link> 
        
                           
                        </div>  
                        <div className="total">
            <Link to='./../viewdesign'><h6>CONTINUE SHOPPING</h6></Link>
            </div>
                          
                        
                 
           
                    <div className="details" key={products.productID}>
                        
                           
                        <img src={`https://blobuploadimages.blob.core.windows.net/testcontainer/${products.imageName}`} width="400" alt=""/> 
                          
                            <div className="box">
                                <div className="row">
                                    <h2> {products.productName}</h2>
                                    
                                    <span>LKR {products.price}</span>
                                </div>
                                <h3> BRANCH: {products.branch}</h3>
                                <p>{products.description}</p>
                                <h3>{products.content}</h3><br/>
                                <button  onClick={() => addCart(products.productID)}>ADD CART</button>
                            </div>
                    </div>
                    </section> 
                   
            </div>
                    
        )
}
export default Details
