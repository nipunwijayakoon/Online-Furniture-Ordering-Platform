import React from 'react';
import './viewmore.css'
import CardActions from '@material-ui/core/CardActions';

class Viewmore2 extends React.Component{
    state={
        products:[
            {
                "_id": "1",
                "title": "  Mirror Table MT018 | TEAK",
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
                       <img src={"https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fcrown_mark%2Fcolor%2Fsheffield%20-%20-829161581_b1100-1%2B11-b0.jpg?width=878&height=600&scale=both&trim.threshold=80"} alt=""/>
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
                    <ol> This nine drawer dresser and mirror provide awesome bedroom storage and style. Free up space elsewhere with this dresser as it is perfect for storing clothing, extra bedding and more in the drawers. The dresser sits on sturdy bracket feet and had decorative bail pull hardware on each drawer front while the mirror has molding as well as a decorative carved ornamentation at the top. This pair comes together to create a piece that is ideal for the update you want in your master bedroom.</ol>
                    
                   </ul>
                   </div>
                   
                   <div className="row"></div> 


                   
                   <div>              
                        <ul class="content">
                            <h4>PRODUCT DETAILS : </h4>
                      
                        <li>SKU Code:FNTBDS11MH10021</li>
                        <li>Width (side to side)	63" W</li>
                        <li>Depth (front to back)	18" D</li>

                        <li>Height (bottom to top) incl mirror	73.5" H</li>
                        <li>Storage	Nine Drawers for Storage</li>
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
export default Viewmore2;