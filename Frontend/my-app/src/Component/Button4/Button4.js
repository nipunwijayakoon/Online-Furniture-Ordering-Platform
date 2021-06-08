
import React, { Fragment, useState } from "react";
import { Button10 } from '../Button10/Button10';
import { Button11 } from '../Button11/Button11';
import { Button12 } from '../Button12/Button12';
import { Button13 } from '../Button13/Button13';
//import {BuyerSeller} from './BuyerSeller/BuyerSeller';

import Grid from '@material-ui/core/Grid';
import './Button4.css';
import { BsFillEnvelopeFill} from 'react-icons/bs';
import { BsPeopleCircle } from 'react-icons/bs';
import { BsFillHouseFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { BsFillPeopleFill } from 'react-icons/bs';

import { Link } from 'react-router-dom';
//import { Grid } from 'react-virtualized';

function Pricing() {
  return (
    <Grid style={{backgroundImage: "url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg')" ,backgroundSize: "cover"}}>
        <Fragment  >
            <section >
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>

            
            <div className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsFillEnvelopeFill />
                </div>
                <h3></h3>
                <h4>CREATE</h4>
                <br></br>
                <h4>NEW</h4>
                <ul className='pricing__container-features'>
                  <li></li>
                  <h4>NOTES</h4>
                  <li></li>
                </ul>
                <Button10 buttonSize='btn--wide' buttonColor='primary'>
                  USE HERE
                </Button10>
              </div>
            </div>


            <div  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsPeopleCircle />
                </div>
                <h3></h3>
                <h4>FIND</h4>
                
                <br></br>
                <h4>CUSTOMER  </h4>
                <ul className='pricing__container-features'>
                  <li></li>
                  <h4>DETAILS</h4>
                  <li></li>
                </ul>


                <Button11 buttonSize='btn--wide' buttonColor='blue'>
                  USE HERE
                </Button11>

                
              </div>
            </div>



            <div  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsFillHouseFill />
                </div>
                <h3></h3>
                <h4>FIND</h4>
                
                <br></br>
                <h4>SELLER</h4>
                <ul className='pricing__container-features'>
                  <li></li>
                  <h4>DETAILS</h4>
                  <li></li>
                </ul>


                <Button12 buttonSize='btn--wide' buttonColor='blue'>
                  USE HERE
                </Button12>

                
              </div>
            </div>


        

            <div  className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsFillPeopleFill />
                </div>
                <h3></h3>
                <h4>MANAGE</h4>
                
                <br></br>
                <h4>ADMIN</h4>
                <ul className='pricing__container-features'>
                  <li></li>
                  <h4>PANEL</h4>
                  <li></li>
                </ul>


                <Button13 buttonSize='btn--wide' buttonColor='blue'>
                  USE HERE
                </Button13>

                
              </div>
            </div>
          


          </div>
        </div>
      </div>
    </IconContext.Provider>

    
    </section>
    </Fragment>
  </Grid>
  );
}
export default Pricing;













































