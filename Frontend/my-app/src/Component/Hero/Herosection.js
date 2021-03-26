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
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          VIEW DESIGNS <i className='far fa-play-circle' />
        </Button2>
        

      </div>
      <Grid container direction="column" justify="center" alignItems="center" style={{height:"100px"}}>
          <Grid item>
        <Fab color="primary" aria-label="add"  href='/shops'>
        <SearchIcon />
       
        </Fab>
       
        </Grid>
        <p1>FIND A SHOP</p1>
        </Grid>
    </div>
    
    
    );
}

export default Herosection

