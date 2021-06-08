import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";
import '../css/Cart.css'
import Typography from '@material-ui/core/Typography';


export default function Cart(props) {

    const cartAPI=(url="https://projectbackendlankafurnituremakers.azurewebsites.net/api/Cartitems")=>{
        return{
            fetchAll:()=> axios.get(url),
            create:(newRecord)=>axios.post(url,newRecord),
            update:(productID,updatedRecord)=> axios.put(url+productID, updatedRecord),
            delete:(productID) =>axios.delete(url+productID),
        };
    };
   
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    
 

   const [minVal, setMinVal] = useState(10000);
   const [maxVal, setMaxVal] = useState(9999990);
   const { addOrEdit, recordForEdit, nextStep } = props
   const [errors, setErrors] = useState({})

    const [randomNum, setRandomNum] = useState(
        
        Math.floor(Math.random() * (maxVal-minVal+1) + minVal)
        );
        
        const handleRandomNum = () => {

            setRandomNum(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
        };

        const initialFieldValues = {
            DesignCode:'',
            
        }
        const [values, setValues] = useState(initialFieldValues)
       
       
        
    const removeProduct = id => {
       
      
        if(window.confirm("Do you want to remove this product?")){
            axios.delete(`https://projectbackendlankafurnituremakers.azurewebsites.net/api/Cartitems/${id}`)
            cart.forEach((item, index) => {
                if(item.productID === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    } 


 
    const reduction = id => {
        cart.forEach(item =>{
            if(item.productID === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item.productID === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
        
    }
    
    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count) 
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])


    useEffect(() =>{
        localStorage.setItem('total', total);
    },[total])

    useEffect(() => {
        localStorage.setItem('designcode', randomNum);
    },[randomNum])
    
   
    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit])

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])
   
   


    if(cart.length === 0)
    return <h3 style={{textAlign: "center", fontSize: "2rem"}}>Your Cart is Empty!!!!</h3>


   const Addproduct=(product)=>{  
        axios.post('https://projectbackendlankafurnituremakers.azurewebsites.net/api/Cartitems',{productName:product.productName,imageName:product.imageName,designcode:randomNum,branch:product.branch,imageSrc:`https://localhost:5001/Images/${product.imageName} `,description:product.description,content:product.content, price:product.price,count:product.count, total:(product.price * product.count)})  
      .then(json => {  
        alert("Product is selected successfully");  
      })  
      } 

      const Deleteproduct=(productID)=>{  
        axios.delete(`https://projectbackendlankafurnituremakers.azurewebsites.net/api/Cartitems/${productID}`)
      .then(json => {  
        alert("Product is deleted successfully");  
      })  
      } 
    


    return (
      
       
           <section>  
                      

        <div >
            <div className="instruct_cart" >
            <Typography component="h4" variant="h5">INSTRUCTIONS TO BUY PRODUCTS :</Typography><hr/>
            <Typography component="h2" variant ="h15"> 1. If there are excess products in the cart that you are not wish to buy, Make sure to remove them before the payment.</Typography>
             <Typography component="h2" variant ="h15">2. Before proceed to checkout process click <strong>"CONFORM TO BUY"</strong>  button.</Typography>
             <Typography component="h2" variant ="h15"> IMPORTANT:- Make sure to put the same "Order Number" in the payment form, indicated on cart when you press the "CONFIRM TO BUY" button  </Typography>
          
           <Typography component="h2" variant ="h15">3. Delivery charge will be added to your order according to the distance between the branch and your designation.</Typography>
            <hr/><br/>
            
            <div className="total">
            <Link to='./../viewdesign'><h15>CONTINUE SHOPPING</h15></Link>
            <p><Typography component="h1" variant="h5" color="textPrimary" margin="50px" gutterBottom >
        Your Order Number:#{randomNum}
        </Typography></p> 
        
            </div>
                      
                      {cart.map(product => (  
                       <div className="details cart" key={product.productID}> 
                           <div>
        
    </div>  
   
                       
                          <img src ={`https://blobuploadimages.blob.core.windows.net/testcontainer/${product.imageName} `}width="400" alt=""/>   
                          <div className="box">
                          <div className="row">
                                        <h2>{product.productName}</h2>  

                                        <span>LKR {product.price * product.count}</span>
                                        </div>
                        
                                        <p>Branch: {product.branch}</p>
                                        <h4>{product.description}</h4>  
                                        <p>{product.content}</p> 
                                        
                              
                                        <div className="amount">  
                          <button className="count" onClick={() => reduction(product.productID)}> - </button>
                          <span> {product.count} </span>
                               <button className="count" onClick={() => increase(product.productID)}> + </button>  
                               
                                   
                               </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(product.productID)}>
                          X</div> 
                          <div className="count">
                          <button className="count" onClick={() => Addproduct(
                          {imageSrc:product.imageSrc,productName:product.productName,
                            imageName:product.imageName,
                            designCode:randomNum,
                          branch:product.branch,description:product.description,
                          content:product.content,price:product.price,
                          imageSrc:`https://localhost:5001/Images/${product.imageName} `,
                          count:product.count,total:(product.price * product.count)})}>CONFIRM TO BUY</button>

                            
                          </div>
                       
                         
                       </div> ))}
                  
                 
           <div className="total" >
               <Link to='./../payments'><h11>CHECKOUT</h11></Link>              
              
              <h30>Total : Rs.{total}</h30>
              
              
           </div>
                <br/>
                <br/>
            </div>
            </div>
            
            </section> 
     
        
    )
}