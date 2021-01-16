import React from 'react';
import '../../App.css';

// const Homepage = () => {
//     return (
//     <div>
//         <Link to="/signup" className="btn btn-primary">Sign Up</Link>
//         <Link to="/ViewDesign" className="btn btn-primary">View Design</Link>
        
//     </div>)
   
import HeroSection from '../Hero/Herosection';
import Card from '../Card/Card';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Card />
      <Footer/>
      
    </>
  );
}

export default Home;