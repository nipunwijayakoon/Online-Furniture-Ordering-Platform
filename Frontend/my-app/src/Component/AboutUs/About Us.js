import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
//import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import './AboutUs.css';
import EmailIcon from '@material-ui/icons/Email';
import { getDynamicStyles } from 'jss';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


const mainFeaturedPost = {
  title: 'ABOUT US',
  description:
    "The main attraction in your home or office is the furniture.",
  image: 'https://ak1.ostkcdn.com/wp-content/uploads/2017/09/Living-Room-Furniture-1.jpg',
  imgText: 'main image description',
 
};

const featuredPosts = [
  {
    title: 'ISLAND WIDE DELIVERY',
    description:'Least delivery charge',
    image: 'https://cdn1.vectorstock.com/i/1000x1000/35/30/furniture-delivery-icon-outline-vector-33243530.jpg',
    imageText: 'Delivery',
    
  },
  {
    title: '100% SECURE SHOPPING',
    description:
      'Safe Payment & Delivery',
    image: 'https://cdn2.vectorstock.com/i/1000x1000/93/96/secure-shopping-icon-vector-13859396.jpg',
    imageText: 'Security',
  },
  {
    title: 'ONLINE SESSIONS',
    description:'Best interaction with Customers',
    image: 'https://i.pinimg.com/originals/98/e2/89/98e289839f8d24fd7884d683d0abae84.png',
    imageText: 'Sessions',
  },
  {
    title: "SRI LANKA'S BEST PRICE",
    description:'We guarantee the best deal in the country',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvJ38EzhMlOF4K_f0xLHHsH-DcIDR9uayOi50hagLaJCy6KsTBalcqFxZGdLtBCqMBwI&usqp=CAU',
    imageText: 'Sessions',
  },
];

export default function About_Us() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container maxWidth="lg">
     
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
       
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
          
            <div className="main">
           <h1 >Welcome!!!</h1> 
           <br/>
           <h2>LANKA FURNITURE MAKERS</h2>
           <h4>Heritage of the Island</h4>

<p>Established in 2020, is a professional manufacturer of any type of wooden furniture and provide related Service with a certified warranty for Domestic customers.Product range, quality level of our goods and our expertise in providing customized solutions represent our main strength in the furniture industry.</p>

<p><strong>"Our vision is to be the leading customized furniture manufacturer in the island"</strong></p>

<p>Our collective thoughts and production is our way of expressing a lifestyle which is harmony with the environment where we live. When making our products, we have always tried to show up the different between apparent quality and true quality.</p>

<p><strong>Quality is the inspiration for our output, and it is something which 
test of time can show up.</strong></p>
<p>Our only Goal is to offer our clients in-trend Authentic SriLankan furniture in unbeatable prices and do value addition on products through in-depth experience in furniture designing, sourcing and manufacturing process so that products become more affordable and get value for the money they spend.</p>

<p>In recent years, "Lanka Furniture Makers" has introduced a series of unique furniture designs including professional spray painting and vast collection of 
Rustic painting techniques and applications.</p>
<p>"Lanka Furniture Makers" has its own workshops and offer a completely transparent manufacturing process with no intermediate or hidden cost. We encourage our clients to visit the factories and to experience manufacturing process of their ordered products.</p>
<p>At "Lanka Furniture Makers" we strives to achieve the highest level of "Customer Satisfaction" possible. Our highly experienced production team and State of the art customer care support with: Broader selection of products, Superior buying experience, on-time delivery of products, Affordable prices and Quick resolution of any concerns has lead us where 
we are standing today in the industry.</p>
<p>We welcome all of you to experience the unmatchable Comfortable with international standardized customised modern and antique furniture designs from "Lanka Furniture Makers"</p>
<p>Thank You!!!</p>
</div>
            <div class="col-sm-12">
            	<div class="about-service">
                	 <img src="https://www.furnituresrilanka.lk/img/measuring.png"/>
                	<h3>Measuring</h3>
                    <p>It's really important to get the measurement and to check the area we want to accommodate furniture and to design furniture according to the available space to get the maximum usage.We give you a time slot to discuss the designing pattern with us via Zoom meetings.</p>
                    <p>During the meeting we mark essential area like switches for accessories (pantry area - For Microwave and for other accessories during the process of construction) and the changes need to be done as per customer requirement.</p>
                    <p>Customer will receive a pdf version of hand sketch on site as to keep a reference of the measurement we took and most of time we could let them know a rough Quotation to get them a idea by explaining the sizes' of the products align with the site measurements.</p>
                   
                
            </div>
            </div>
            <div class="col-sm-12">
             	<div class="about-service">
                	<img src="https://www.furnituresrilanka.lk/img/planning.png"/>
                    <h3>Drawing</h3>
                    <p>Once we get the site mesurnmet, our designing team will start sharing details with our clients to understand their needs and expectations. We start designing a AUTO CADD drawings Once we gathered required info from our customers and we use our collective thoughts to design an unique pieces of furniture determining the budget of the customer.</p>
                    <p>Sometimes we provide rough sketches by mentioning measurements   to make it more simple and understandable. </p>
                    <p>We provide 3D drawings for projects like hotels, villa, hospitals, schools and for some households on request (This may subject to additional charges.) to visualize the final product at paper stage.</p>
                </div>
            </div>
            <div class="col-sm-12">
             	<div class="about-service">
                	<img src="https://www.furnituresrilanka.lk/img/IKEA%20assembly%20tool__assembly.png"/>
                    <h3>Manufaturing</h3>
                    <p>Well experienced and dedicated Wood Craftsman's are there at factories to make high quality furniture with immaculate finishing. We use deferent unique techniques to make all our furniture and other related products. (ex: Lampshades , Curtaining, Rugs and est.)</p>
                    <p>"Lanka Furniture Makers" use several materials (solid wood and artificial wood) for our production.</p>
                    <p>Solid Wood - Teak Wood, Mahogany Wood, Pare Mara Wood, Nadoon Wood, Jack Wood,  Est.</p>
                    <p>Artificial Wood - MDF, Shatter Board, Melamine, Eco Boards and Plywood (on request)</p>
                    <p>We treat all timber we use for our production by outsourcing to a seasoning plant that follow international standards' when drying and seasoning the wood. We encourage them to maintain the moisture content of the wood up to 8-12% when collecting form the seasoning plant and during the process of manufacturing the moisture content will maintain around 15% due to factory environment.</p>
                    <p>In the process of manufacturing we use High quality adhesive to joining wood and other jointing and further we follow tong and grove technique for timber plank joining.</p>
                    <p>First class seasoning , staining and clear top coatings is been use to get the final fishing of the products and "Daluwa Furniture" has its own techniques to do rustic and washed painting applications on solid wood surface with any available colours and effects.</p>
                </div>
            </div>
            <div class="col-sm-12">
             	<div class="about-service">
                	<img src="https://www.furnituresrilanka.lk/img/IKEA%20sewing%20thread__sewing.png"/>
                    <h3>Tailoring</h3>
                    <p>"Lanka Furniture Makers" has its own workshops to do tailoring and cushioning. We have set of skilled and Qualified Tailors to do the tailoring and to customize any kind of design with neat and well finished inner and outer appearance. All edges and lines are cleared with maximum straight possible and save fabrics by surveying the minimum quantity for the selected jobs and that benefits goes to the customer when it comes to material cost.</p>
                    <p>"Lanka Furniture Makers" use high quality fabrics purchase from reputed suppliers and high density foams to make all of our sofas more squishy and comfortable. </p>
                    <p>When tailoring curtains and Blinds using sheers and Fabrics, we follow a unique techniques make them straight and even at any stage of the tailoring process. We make sure no that all our final products meets customer expectations and to align with the International standards.</p>
                </div>
            </div>
            <div class="col-sm-12">
             	<div class="about-service">
                	<img src="https://www.furnituresrilanka.lk/img/installation.png"/>
                    <h3>Customer Care</h3>
                    <p>At "Lanka Furniture Makers" we strives to achieve the highest level of "Customer Satisfaction" possible. Our highly experienced production team and State of the art customer care support with Quick resolution of any concerns, immediate attention for any damages or complains and further we keep in touch with our clients time to time so they know that we are there always to help them in any foam of the business and customer service.</p>
                    <p>We do undertake reupholstering for the sofas and cushioning we did and apart from that we undertake any reupholstering of third party products (purchase from any other suppliers) as a customer service for the nation.</p>
                    <p>Further our online request service is there for quick replies and to inform us faster way.</p>
                </div>
            </div>
            <div class="col-sm-12">
             	<div class="about-service">
                	<img src="https://www.furnituresrilanka.lk/img/IKEA%20delivery%20van__delivery.png"/>
                    <h3>Delivery</h3>
                    <p>"Lanka Furniture Makers" has its own transport service within the country and during the transport, we ensure almost all products are safe and sketch free when handing over to the customer. At the delivery process we do have a packing system and a set of people to handle the products at the site. </p>
                    <p>"Lanka Furniture Makers" has its own transport service within the country and during the transport, we ensure almost all products are safe and sketch free when handing over to the customer. At the delivery process we do have a packing system and a set of people to handle the products at the site.</p>
                    <p>We will arrange the delivery within three working days once the full payment is settled or the cheque after realized.</p>
                <br/>
                </div>
            </div>
          
   </Grid>
  
         
        </main>
        <Footer >
     
     </Footer>
      </Container>
      <br/>
      <br/>
     
    </React.Fragment>
  );
}