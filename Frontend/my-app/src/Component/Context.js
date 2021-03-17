import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {
 state = {
        products: [
           {
                "itemID": "1",
                "title": "Sereta Wooden Sofa Set",
                "src": "images/1.jpg",
                "description": ["Serta 4 Seater Sofa by Mahogani Wood"],
                "content": "An epitome of beauty and the right durability can be seen in the Sereta wooden sofa. The straightforward design presenting the clean lines makes for a stately, modern upgrade for your living room. It is finely crafted from premium-quality Sheesham wood.",
                "price": 182000,
                "colors": ["beige", "White", "cadetblue", "gold", "peru", "silver"],
                "count": 1
            },
            {
                "itemID":"2",
                "title": "Dressing Table MT018 | TEAK",
                "src": "images/2.jpg",
                "description": "Regular Dresser in Teak Finish",
                "content": "This Product from Captiver comes with a rectangular mirror placed on a durable wooden plank along with 3 small and 1 long shelf in addition with 2 corrosion resistant brass hooks..It has an eye-catching sleek design. You can place your grooming and makeup essentials over it like perfume bottles makeup brushes, hair combs, and other stuff.",
                "price": "39990",
                "colors": ["brown"],
                "count": 1
            },
            
            {
                "itemID": "3",
                "title": "Coffee Table MT018 | TEAK",
                "src": "images/3.jpg",
                "description": "Smart Looking Table with Neatly Rounded Edges",
                "content": "Teak Wood Rectangular Top Folding Table For Your Living Room, Kitchen & Garden.Simple Stylish Design, Functional & Suitable for Any Room | Offers Surface Storage, Side Table for Bedroom & Living Room.",
                "price": 32600,
                "colors": ["firebrick","black"],
                "count": 1
            },
            {
                "itemID": "4",
                "title": "Double Bedding Set",
                "src": "images/4.jpg",
                "description": "Co-Exist 100% cotten 3 pieces Double Bedding Set ",
                "content": "Premium 200TC cotton double bedsheets with pillow covers. Large size to make it easy to tuck-in below the bed.Mercerised and anti microbial treatment done to make the fabric super soft and safe.Pack Contains 1 double bed sheet with 2 pillow covers.",
                "price": 188375,
                "colors": ["brown", "firebrick"],
                "count": 1
            },
            {
                "itemID": "5",
                "title": "Wall Shelf",
                "src": "images/5.jpg",
                "description": "Brown Wood Round Set of 4 Modular Wall Shelf",
                "content": "We always try to minimize color variations between the actual product and catalogue may vary slightly from the original product due to various reasons like, (Colors :Light Brown, White, Cream, Dark Brown Maroon, with Textured) But, Definitely will look beautiful.",
                "price": 30990,
                "colors": ["black", "white", "brown", "maroon"],
                "count": 1
            },
            {
                "itemID": "6",
                "title": "Book Case | MAHOGANI",
                "src": "images/6.jpg",
                "description": "Durable Water-resistant with Easy-clean Surface",
                "content": "A contemporary bookshelf and display unit which can be placed in any part of the home.We will be raising a request for post-sales customer service with the brand, they may contact you within 2 weeks of delivery",
                "price": 132000,
                "colors": ["brown"],
                "count": 1
            },
            {
                "itemID": "7",
                "title": "Chair CR550 | TEAK",
                "src": "images/7.jpg",
                "description": ["Solid Teak timber will last for many years"],
                "content": "Comfortable, affordable and simple to care for CR550 is a great match for many different lifestyles.",
                "price": 6300,
                "colors": ["maroon", "Brown"],
                "count": 1
            },
            {
                "itemID": "8",
                "title": "Dining Table TB855 | SURIYA MARA",
                "src": "images/8.jpg",
                "description": "Simple yet elegantly designed with modern lines",
                "content": "This is uniquely crafted with authentic planks using solid Sooriya-Mara timber that will last for many years growing more graceful with age. It really adds a presence to the dining room not only as a gathering spot for family and friends, but also as a focal point in the home.",
                "price": 47900,
                "colors": ["Brown", "Black"],
                "count": 1
            },
            {
                "itemID": "9",
                "title": "Bed KENNY  | MAHOGANI",
                "src": "images/9.jpg",
                "description": "Smart looking Comfortable Double Bed 100' x 75'",
                "content": "Its fine, elegantly tapered legs and headboard make an interesting detail elevating this piece to the highest level in the collection. Bed side tables, Mattress, wardrobes, dressing tables and stools to match this bed could be selected from the widely available range of products.",
                "price": 193500,
                "colors": ["brown"],
                "count": 1
            },
            {
                "itemID": "10",
                "title": "Wardrobe AH0816 | MAHOGANI",
                "src": "images/10.jpg",
                "description": "3 Swing Doors and Chest of 2 drawers with a Combined Mirror with Frame",
                "content": " This unit is an impressive set of furniture and is a perfect solution for modern bedrooms. The internal details of wardrobe is designed with hanging rod, shelves and a drawer. The Brighton set is made out of solid Mahogany timber that will last for many years growing more graceful with age.",
                "price": 178700,
                "colors": ["firebrick"],
                "count": 1
            },
            {
                "itemID": "11",
                "title": "Book Shelf JOYCE | HALMILLA",
                "src": "images/11.jpg",
                "description": "86.00' Height x 36.00' Width x 18.00' Depth Assembly required",
                "content": "Made with solid Halmilla wood consisting of 3 shelves. It contains with ne adjustable wood-framed glass shelf, one adjustable shelf and two doors with another adjustable shelf behind. One canister light controlled by three-intensity touch switch.",
                "price": 97800,
                "colors": ["black"],
                "count": 1
            },
            {
                "itemID": "12",
                "title": "WELLINGTON Dining Set | MAHOGANI",
                "src": "images/12.jpg",
                "description": "Clean Surface Table and 6 Charis with Foam and Upholstered with Fabric Ensuring with Better Comfort",
                "content": "The Fashionable modern dining table with the mix of designer sturdy legs and the chairs of seat which is padded with foam and upholstered with fabric ensuring the better comfort is always in high demand. Made out of solid Mahogany timber that will last for many years growing more graceful with age.",
                "price": 152000,
                "colors": ["brown", "black"],
                "count": 1
            },
            {
                "itemID": "13",
                "title": "Dining Table TB031 | TEAK",
                "src": "images/13.jpg",
                "description": "6 Person 1' Thick Rectangular top Roundover Edge Wood Slides 4.5' turned Legs Solid top Table",
                "content": " An innovative upmarket sturdy dining table which could boast about its design elements. This solid top Fenmore leg dining table is made out of solid Teak timber that will last for many years growing more graceful with age and it adds a presence to the dining room not only as a gathering spot for family and friends, but also as a focal point in the home..",
                "price": 35100,
                "colors": ["firebrick","brown"],
                "count": 1
            },
            {
                "itemID": "14",
                "title": "Classic Sofa Set | TEAK",
                "src": "images/14.jpg",
                "description": "Three Seater, Two Seater and 2 Single Seaters with 2 Side Tools and a Center Tool",
                "content": "Each sofa seater is sanded, carved and smoothly finished by hand using the traditional woodworking techniques. To preserve its rich classic charm a smooth semi-gloss finish has been applied to the wooden surface to emphasize the swirling teak grain. Whether you live in a modern or traditional household, this classic teak sofa can be successfully incorporated into your interior design scheme.",
                "price": 138500,
                "colors": ["darkturquoise", "beige", "crimson", "darkseagreen", "khaki",],
                "count": 1
            },
            {
                "itemID": "15",
                "title": "Wardrobe REGENT | HALMILLA",
                "src": "images/15.jpg",
                "description": "Classic Design with Double doors, an Inbuilt Molding in Top and 2 Drawers",
                "content": "Featuring a classic design with double doors with an inbuilt molding top and two drawers, the Regent wardrobe is sure to complement any scheme. Combining the natural beauty of solid Mahogany timber with fine detailing, this unit has a timeless elegance that’s hard to beat. The internal detail is designed with hanging rod and three shelves.",
                "price": 47200,
                "colors": ["brown", "maroon"],
                "count": 1
            }
            
        ],
        cart: [],
        total: 0
        
    };

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

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.itemID === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.itemID === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item.itemID === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}