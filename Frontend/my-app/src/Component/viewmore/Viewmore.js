import React from 'react';
import './viewmore.css'
import CardActions from '@material-ui/core/CardActions';

class Viewmore extends React.Component{
    state={
        products:[
            {
                "_id": "1",
                "title": "Sereta Wooden Sofa Set",
                "src": "https://i.pinimg.com/originals/dd/13/c7/dd13c74888cf45be7a5f2a702cb3171b.jpg",
                "discription": ["Color:Espress",
               "Material:  Glass",
                "Finish Type	Espress",
                "Item Dimensions LxWxH	8 x 22 x 24 inches",
                "Number of Doors 2"] ,
                
                "price": 67000,
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
                       <img src={"https://images.woodenstreet.de/image/cache/data%2Fwooden-sofa%2Fsereta-wooden-sofa-revised%2Fhoney%2F1st-2%2B1%2B1%2B-880x518.jpg"} alt=""/>
                   </div>
                            
                   <div className="box">
                       <div className="row">
                           <h2>{item.title}</h2>
                           <span><h3>LKR {item.price}</h3></span>
                       </div>
                      <div className="colors"><h4>SEATER COLOUR : </h4>
                           {
                               item.colors.map(color =>(
                                   <button style={{background: color}}  ></button>
                               ))
                           }
                        </div> 
                        <div className="row"></div>
                   <div>
                   <h4>OVERVIEW : </h4>
                   <ul>
                    <ol> 1. An epitome of beauty and the right durability can be seen in the Sereta wooden sofa. The straightforward design presenting the clean lines makes for a stately, modern upgrade for your living room.</ol>
                    <ol> 2. It is finely crafted from premium-quality Sheesham wood.</ol>
                   </ul>
                   </div>
                   
                   <div className="row"></div> 


                   
                   <div>              
                        <ul class="content">
                            <h4>PRODUCT DETAILS : </h4>
                        <li>Material : Sheesham Wood</li>
                        <li>Single Seater Dimensions (Inch)  :  33 L x 31 W x 30 H</li>
                        <li>Two Seater Dimensions (Inch)      : 62 L x 31 W x 30 H</li>
                        <li>Three Seater Dimensions (Inch)    : 72 L x 31 W x 30 H</li>

                        <li>Caring Instructions   :  Professional cleaning only</li>
                        <li>Finish   :   Honey Finish</li>
                        <li>Delivery Condition :  Basic assembly/DIY</li>

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
export default Viewmore;