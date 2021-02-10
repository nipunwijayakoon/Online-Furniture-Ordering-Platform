import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Sereta Wooden Sofa Set",
                "src": "https://i.pinimg.com/originals/dd/13/c7/dd13c74888cf45be7a5f2a702cb3171b.jpg",
                "description": ["Serta 4 Seater Sofa by Mahogani Wood"],
                "content": "An epitome of beauty and the right durability can be seen in the Sereta wooden sofa. The straightforward design presenting the clean lines makes for a stately, modern upgrade for your living room. It is finely crafted from premium-quality Sheesham wood.",
                "price": 182000,
                "colors": ["beige", "White", "cadetblue", "gold", "peru", "silver"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Dressing Table MT018 | TEAK",
                "src": "https://damro.lk/wp-content/uploads/2020/01/Feori-Dressing-Table.jpg",
                "description": "Regular Dresser in Teak Finish",
                "content": "This Product from Captiver comes with a rectangular mirror placed on a durable wooden plank along with 3 small and 1 long shelf in addition with 2 corrosion resistant brass hooks..It has an eye-catching sleek design. You can place your grooming and makeup essentials over it like perfume bottles makeup brushes, hair combs, and other stuff.",
                "price": 39990,
                "colors": ["Brown", "Black","firebrick"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Coffee Table MT018 | TEAK",
                "src": "https://pbs.twimg.com/media/DjhAsFWWwAEzxMq.jpg:large",
                "description": "Smart Looking Table with Neatly Rounded Edges",
                "content": "Teak Wood Rectangular Top Folding Table For Your Living Room, Kitchen & Garden.Simple Stylish Design, Functional & Suitable for Any Room | Offers Surface Storage, Side Table for Bedroom & Living Room.",
                "price": 32600,
                "colors": ["firebrick","black"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Double Bedding Set",
                "src": "https://www.furnitureplus.lk/wp-content/uploads/2019/02/Diana.jpg",
                "description": "Co-Exist 100% cotten 3 pieces Double Bedding Set ",
                "content": "Premium 200TC cotton double bedsheets with pillow covers. Large size to make it easy to tuck-in below the bed.Mercerised and anti microbial treatment done to make the fabric super soft and safe.Pack Contains 1 double bed sheet with 2 pillow covers.",
                "price": 188375,
                "colors": ["brown", "firebrick"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Wall Shelf",
                "src": "https://m.media-amazon.com/images/I/618tv2C1+-L._SL1200_.jpg",
                "description": "Brown Wood Round Set of 4 Modular Wall Shelf",
                "content": "We always try to minimize color variations between the actual product and catalogue may vary slightly from the original product due to various reasons like, (Colors :Light Brown, White, Cream, Dark Brown Maroon, with Textured) But, Definitely will look beautiful.",
                "price": 30990,
                "colors": ["black", "white", "brown", "maroon"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Book Case | MAHOGANI",
                "src": "https://cdn.decoratorist.com/wp-content/uploads/inspirations-traditional-bookshelf-designs-951631.jpg",
                "description": "Durable Water-resistant with Easy-clean Surface",
                "content": "A contemporary bookshelf and display unit which can be placed in any part of the home.We will be raising a request for post-sales customer service with the brand, they may contact you within 2 weeks of delivery",
                "price": 132000,
                "colors": ["brown"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Chair CR550 | TEAK",
                "src": "https://i.pinimg.com/564x/72/e0/85/72e085746474f9e54b17e392f0abbb57.jpg",
                "description": ["Solid Teak timber will last for many years"],
                "content": "Comfortable, affordable and simple to care for CR550 is a great match for many different lifestyles.",
                "price": 6300,
                "colors": ["maroon", "Brown"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Dining Table TB855 | SURIYA MARA",
                "src": "https://i.pinimg.com/564x/47/d0/cb/47d0cb8fbc05df2551b76f03877a9ce7.jpg",
                "description": "Simple yet elegantly designed with modern lines",
                "content": "This is uniquely crafted with authentic planks using solid Sooriya-Mara timber that will last for many years growing more graceful with age. It really adds a presence to the dining room not only as a gathering spot for family and friends, but also as a focal point in the home.",
                "price": 47900,
                "colors": ["Brown", "Black"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Bed KENNY  | MAHOGANI",
                "src": "https://i.pinimg.com/564x/0d/25/49/0d254943577837044d4aab5475629de2.jpg",
                "description": "Smart looking Comfortable Double Bed 100' x 75'",
                "content": "Its fine, elegantly tapered legs and headboard make an interesting detail elevating this piece to the highest level in the collection. Bed side tables, Mattress, wardrobes, dressing tables and stools to match this bed could be selected from the widely available range of products.",
                "price": 193500,
                "colors": ["brown"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Wardrobe AH0816 | MAHOGANI",
                "src": "https://i.pinimg.com/564x/40/6e/c0/406ec0e9b8bcaf4ac9a4a2548a687be2.jpg",
                "description": "3 Swing Doors and Chest of 2 drawers with a Combined Mirror with Frame",
                "content": " This unit is an impressive set of furniture and is a perfect solution for modern bedrooms. The internal details of wardrobe is designed with hanging rod, shelves and a drawer. The Brighton set is made out of solid Mahogany timber that will last for many years growing more graceful with age.",
                "price": 178700,
                "colors": ["firebrick"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Book Shelf JOYCE | HALMILLA",
                "src": "https://i.pinimg.com/564x/a6/e0/53/a6e05354b407e03d2962e61e63f037a4.jpg",
                "description": "86.00' Height x 36.00' Width x 18.00' Depth Assembly required",
                "content": "Made with solid Halmilla wood consisting of 3 shelves. It contains with ne adjustable wood-framed glass shelf, one adjustable shelf and two doors with another adjustable shelf behind. One canister light controlled by three-intensity touch switch.",
                "price": 97800,
                "colors": ["black"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "WELLINGTON Dining Set | MAHOGANI",
                "src": "https://i.pinimg.com/564x/e2/3f/82/e23f82d4ab4c96b6d58ea58bcbfbb4d1.jpg",
                "description": "Clean Surface Table and 6 Charis with Foam and Upholstered with Fabric Ensuring with Better Comfort",
                "content": "The Fashionable modern dining table with the mix of designer sturdy legs and the chairs of seat which is padded with foam and upholstered with fabric ensuring the better comfort is always in high demand. Made out of solid Mahogany timber that will last for many years growing more graceful with age.",
                "price": 152000,
                "colors": ["brown", "black"],
                "count": 1
            },
            {
                "_id": "13",
                "title": "Dining Table TB031 | TEAK",
                "src": "https://i.pinimg.com/564x/35/ca/3b/35ca3b826cbc6f0f6f88b2d23e59b012.jpg",
                "description": "6 Person 1' Thick Rectangular top Roundover Edge Wood Slides 4.5' turned Legs Solid top Table",
                "content": " An innovative upmarket sturdy dining table which could boast about its design elements. This solid top Fenmore leg dining table is made out of solid Teak timber that will last for many years growing more graceful with age and it adds a presence to the dining room not only as a gathering spot for family and friends, but also as a focal point in the home..",
                "price": 35100,
                "colors": ["firebrick","brown"],
                "count": 1
            },
            {
                "_id": "14",
                "title": "Classic Sofa Set | TEAK",
                "src": "https://www.sandellafurniture.com/wp-content/uploads/2020/01/Amerika-Teak-Sofa-Set-Sri-Lanka.jpg",
                "description": "Three Seater, Two Seater and 2 Single Seaters with 2 Side Tools and a Center Tool",
                "content": "Each sofa seater is sanded, carved and smoothly finished by hand using the traditional woodworking techniques. To preserve its rich classic charm a smooth semi-gloss finish has been applied to the wooden surface to emphasize the swirling teak grain. Whether you live in a modern or traditional household, this classic teak sofa can be successfully incorporated into your interior design scheme.",
                "price": 138500,
                "colors": ["darkturquoise", "beige", "crimson", "darkseagreen", "khaki",],
                "count": 1
            },
            {
                "_id": "15",
                "title": "Wardrobe REGENT | HALMILLA",
                "src": "https://i.pinimg.com/564x/5f/96/7f/5f967f0c90c57e5bb599dcd334edb6c7.jpg",
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
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product is already in the cart ")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
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
                if(item._id === id){
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