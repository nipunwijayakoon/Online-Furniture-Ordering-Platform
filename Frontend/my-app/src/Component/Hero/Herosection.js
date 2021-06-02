import React from 'react'
import './Herosection.css';
import '../../App.css';
import { Button } from '../Button/Button';
import { Button2 } from '../Button2/Button2';
import { Fab, Grid, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';






function Herosection() {
    return (
      
        <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>LANKA FURNITURE MAKERS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns' >
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          JOIN NOW
        </Button>
      

      </div>
     
    </div>
    
    
    );
}

export default Herosection

