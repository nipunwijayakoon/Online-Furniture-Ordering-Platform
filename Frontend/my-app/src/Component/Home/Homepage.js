import React from 'react';
import '../../App.css';

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