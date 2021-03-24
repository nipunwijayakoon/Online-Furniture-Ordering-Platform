import React, { useState, useEffect, Component } from 'react'
import axios from "axios";
import '../css/Products.css';
import '../css/Item.css';

import CartIcon from '../svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'
import Menu from '../svg/bars-solid.svg'



export default function Search(props) {
    const [product, setProductList] = useState([])
    const [cart, setCart] = useState([])
      
    const [visible, setVisible] = useState(6)
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


    const imageCard = data => (
        <div className="card" key={data.itemID}>
          <Link to={`/product/${data.itemID}`}>
                               <img src={`https://localhost:5001/${data.src}`} alt=""/>
                           </Link>
                           <div className="content">
                           <h3>
                                   <Link to={`/product/${data.itemID}`}>{data.title}</Link>
                               </h3>
                               <span>LKR {data.price}</span>
                               <h3>{data.description}</h3>
                <button  onClick={() => addCart(data.itemID)}>ADD CART</button>
                
            </div>
        </div>
    )
    const [searchName, setSearchName] = useState('');
    const nameFilter = (event) => setSearchName(event.target.value.toLowerCase());

    const [searchPrice, setSearchPrice] = useState('');
    const priceFilter = (event) => setSearchPrice(event.target.value);


    const showmoreProducts =()=>{
        setVisible ((prevValue)=>prevValue + 6)}

    
    return (
        <div id="product">
                    
                    
                    
                 
                    
                    <div className="col-md-2 searchcard">
                    <input type="search"
                        className="form-control" placeholder={'Search by Product Name'} onChange={nameFilter}/>
                    </div>
                    
                    <div className="col-md-1 ">
                    <div className="col-md-2 searchcard">
                    <input type="search"
                        className="form-control" placeholder={'Search by Max Price'} onChange={priceFilter}/>
                    </div>    
                    </div>
                
                     
                    
                    <div   className="cart-icon">
                    npm
                    <Link to='/cart'> 
                         
                    <img src={CartIcon} alt="" width="40" /> 
                     <span >{cart.length}</span>   
                     </Link>
                     </div>
            
                   
                
                
                <div id="product">
                        {
                           
                            
                            product.filter((productList)=>{
                                if (searchName ===  "" && searchPrice === "" )
                                { return productList}
                             
                                else if (productList.title.toLocaleLowerCase().includes(searchName)  && searchPrice === "")
                                   { return productList}
                                
                                else if (searchName === ""  && searchPrice === "")
                                   { return productList}  
                                else if (searchName === ""  && productList.price <= (searchPrice))
                                   { return productList}   

                                else if (productList.title.toLocaleLowerCase().includes(searchName) && searchPrice === "")
                                   { return productList}   
                                else if (productList.title.toLocaleLowerCase().includes(searchName)  && productList.price <= (searchPrice))
                                   { return productList} 
                                else if (searchName === ""  && productList.price <= (searchPrice))
                                   { return productList}  
                                // else if (productList.title.toLocaleLowerCase().includes(searchName) && productList.addresse.toLocaleLowerCase().includes(searchAddress) && productList.unitPrice <= (searchPrice))
                                //    { return productList}           

                             }).slice(0,visible).map((productList) =>
                                <tc>
                                    <td >{imageCard(productList)}</td>   
                                </tc>
                            )
                        }
                   
                </div>
            
            <button className="container btnloadmore hover " onClick={showmoreProducts}><b>Load More . . . . . </b></button>
        </div>
    )
}