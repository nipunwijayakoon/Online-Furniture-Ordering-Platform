import React from 'react';
import { Button8 } from '../Button8/Button8';
import { Button9 } from '../Button9/Button9';
import './Button3.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { BsPeopleCircle } from 'react-icons/bs';
import { BsFillHouseFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Prcing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='prcing__section'>
        <div className='prcing__wrapper'>
          
          <div className='prcing__container'>
            <div className='prcing__container-card'>
              <div className='prcing__container-cardInfo'>
                <div className='icon'>
                  <BsPeopleCircle  />
                </div>
                <h3></h3>
                <h1>BECOME</h1>
                <br></br>
                <h4>A</h4>
                <ul className='prcing__container-features'>
                  <li></li>
                  <h4>BUYER</h4>
                  <li></li>
                </ul>
                <Button9 buttonSize='btn--wide' buttonColor='primary'>
                  SIGN UP
                </Button9>
              </div>
            </div>
            <div  className='prcing__container-card'>
              <div className='prcing__container-cardInfo'>
                <div className='icon'>
                  <BsFillHouseFill  />
                </div>
                <h3></h3>
                <h1>BECOME</h1>
                
                <br></br>
                <h4>A</h4>
                <ul className='prcing__container-features'>
                  <li></li>
                  <h4>SELLER</h4>
                  <li></li>
                </ul>


                <Button8 buttonSize='btn--wide' buttonColor='blue'>
                  SIGN UP
                </Button8>

                
              </div>
            </div>
          


          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Prcing;