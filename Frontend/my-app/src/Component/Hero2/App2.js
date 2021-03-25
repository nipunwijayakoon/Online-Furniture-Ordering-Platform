import React from 'react'
import './App2.css';
import '../../App.css';
import { Button7 } from '../Button7/Button7';
import { Button6 } from '../Button6/Button6';
import { Fab, Grid, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';






function Herosection() {
    return (
      
        <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>LANKA FURNITURE MAKERS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns' >
        


      <Button6
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          MANAGE PRODUCTS
        </Button6>

        <Button7
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
           
           MANAGE NEW DESIGNS
           <i className='far fa-play-circle' />
        </Button7>

       
        

      </div>
      
    </div>
    
    
    );
}

export default Herosection

