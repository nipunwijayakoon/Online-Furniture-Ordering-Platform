import React from 'react';
import './viewmore.css'
import CardActions from '@material-ui/core/CardActions';

class Viewmore3 extends React.Component{
    state={
        products:[
            {
                "_id": "1",
                "title": "  Coffee Table MT018 | TEAK",
                "src": "https://damro.lk/wp-content/uploads/2019/11/Felicia-Dressing-Table-350x287.jpg",
                "discription": ["Color:Espress",
               "Material:  Glass",
                "Finish Type	Espress",
                "Item Dimensions LxWxH	8 x 22 x 24 inches",
                "Number of Doors 2"] ,
                
                "price": 63400,
                "colors": ["white", "black", "crimson", "teal"],
                "count": 1
            
            }
        ]
    };

   


render() {
    const {products} = this.state;
    
    return(
        <div className="viewmore">
           { products.map(item =>(
               <div className="details" key={item._id}>
                   <div className="big-img">
                       <img src={"https://ii1.pepperfry.com/media/catalog/product/v/e/568x625/vega-coffee-table-with-stools-in-honey-finish-by-trendsbee-vega-coffee-table-with-stools-in-honey-fi-658vmq.jpg"} alt=""/>
                   </div>
                            
                   <div className="box">
                       <div className="row">
                           <h2>{item.title}</h2>
                           <span><h3>LKR {item.price}</h3></span>
                       </div>
                      
                        <div className="row"></div>
                   <div>
                   <h4>OVERVIEW : </h4>
                   <ul>
                    <ol> 1. Give a stunning makeover to your living room with the Boho coffee table. Colourful tiles embrace each facet, making a statement of their own.
<ol>2. Crafted from premium quality Sheesham wood makes its structure durable.</ol>
​
                    </ol>
                   </ul>
                   </div>
                   
                   <div className="row"></div> 


                   
                   <div>              
                        <ul class="content">
                            <h4>PRODUCT DETAILS : </h4>
                      
                        <li>SKU Code:FNTBDS11MH10021</li>
                        <li>Dimensions (Inch)
44 L x 23 W x 17 H</li>
                        <li>Finish
Honey Finish</li>

                        <li>Delivery Condition
Pre-assembled</li>
                        <li>Caring Instructions
Professional cleaning only</li>
                        
                        </ul>
                        </div>
                  {/* <ul>{item.discription}</ul>*/}
                   <p>{item.content}</p>

                   {/*<div className="thumb">
                       {
                           item.src.map(img =>(
                               <img src={img} alt=""/>
                            
                           ))
                       }
                    </div>*/}
                    
                    <CardActions>
                    <button className="button" >
                     <h4>BACK</h4>
                    </button>
                    <button className="button" >
                     <h4>ADD TO CART</h4>
                    </button>
                    <button className="button" >
                     <h4>ORDER NOW</h4>
                    </button>
                  </CardActions>
                    
                   </div>
                   </div>
           ))
            }
        </div>
    );
        };
        
    }
export default Viewmore3;