import React, { useState, useEffect, Component } from 'react'
import axios from "axios";
import '../css/Products.css';
import CartIcon from '../svg/shopping-cart-solid.svg'
import {Link} from 'react-router-dom'


export default function Search(props) {
    const [product, setProductList] = useState([])
    const [cart, setCart] = useState([])
      
    const [visible, setVisible] = useState(6)
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


    const imageCard = data => (
        <div className="card" key={data.productID}>
          <Link to={`/product/${data.productID}`}>
                               <img src={`https://blobuploadimages.blob.core.windows.net/testcontainer/${data.imageName}`} alt=""/>
                            
                           </Link>
                           <div className="content">
                           <h3>
                                   {data.productName}
                               </h3>
                               
                               <h5>
                                  BRANCH: {data.branch}
                               </h5>
                               <span>LKR {data.price}</span>
                                <br/>
                               <h4>{data.description}</h4>
                <button  onClick={() => addCart(data.productID)}>ADD CART</button>
                
            </div>
        </div>
    )
    const [searchName, setSearchName] = useState('');
    const nameFilter = (event) => setSearchName(event.target.value.toLowerCase());

    const [searchPrice, setSearchPrice] = useState('');
    const priceFilter = (event) => setSearchPrice(event.target.value);

    const [searchBranch, setSearchBranch] = useState('');
    const branchFilter = (event) => setSearchBranch(event.target.value.toLowerCase());


    const showmoreProducts =()=>{
        setVisible ((prevValue)=>prevValue + 6)}

    
    return (
        <div id="product">
                    
                    <div className="col-md-2 searchcard">
                        
                    <input type="search"
                        className="form-control" placeholder={'Filter by Furniture Type'} onChange={nameFilter}/>
                    </div>
                    
                    <div className="col-md-1 ">   
                    <div className="col-md-2 searchcard">
                    <input type="search"
                        className="form-control" placeholder={'Filter by Maximum Price'} onChange={priceFilter}/>
                    </div>    
                    </div> 

                    <div className="col-md-2 searchcard">
                    <input type="search"
                        className="form-control" placeholder={'Filter by Branch'} onChange={branchFilter}/>
                    </div>    
                    

                    
                    <div className="cart-icon2 ">  
                    <Link to='/cart'>  
                    <img src={CartIcon} alt="" width="40" /> 
                     <span>{cart.length}</span>   
                     </Link>
                    </div>
                   
                 
            
           
                <div id="product">
                        {
                           
                            
                            product.filter((productList)=>{
                                if (searchName ===  "" && searchPrice === "" && searchBranch ==="" )
                                { return productList}
                             
                                else if (productList.productName.toLocaleLowerCase().includes(searchName)  && searchPrice === "" && searchBranch ==="")
                                   { return productList}
                                
                                else if (searchName === ""  && searchPrice === "" && productList.branch.toLocaleLowerCase().includes(searchBranch))
                                   { return productList}  
                                else if (searchName === "" &&  productList.price <= (searchPrice) && searchBranch ==="" )
                                   { return productList}   

                                else if (productList.productName.toLocaleLowerCase().includes(searchName) && searchPrice === "" && productList.branch.toLocaleLowerCase().includes(searchBranch))
                                   { return productList}   
                                else if (productList.productName.toLocaleLowerCase().includes(searchName)  && productList.branch.toLocaleLowerCase().includes(searchBranch) && productList.price <= (searchPrice))
                                   { return productList} 
                                else if (searchName === ""   && productList.price <= (searchPrice) && productList.branch.toLocaleLowerCase().includes(searchBranch))
                                   { return productList}  
                               
                             }).slice(0,visible).map((productList) =>
                                <tc>
                                    <td >{imageCard(productList)}</td>   
                                </tc>
                            )
                        }
                   
                </div>
            
            <button className="btnloadmore" onClick={showmoreProducts}><b>Load More. . . </b></button>
        </div>
        
    )
}
