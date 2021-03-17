import React from 'react';
import './Card.css';
import CardItem from './Cardim';
import Cardvideo from '../Cardvideo/Cardvideo' ;

// Tes


function Cards() {
    return (
      <div className='cards'>
        <h1>You can make orders or buildup own ideas through this!</h1>
        <br></br>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-1.jpg'

                text='- MAIN STEPS FOR MAKING ORDERS'
                label='Veiw More'
                path='/card1'
              />
              <CardItem
                src='images/img-2.jpg'
                text='- ABOUT UPLOAD NEW DESIGN FEATURE'
                label='Veiw More'
                path='/card2'
              />
            </ul>
            <ul className='cards__items'>

               <Cardvideo></Cardvideo>
               <Cardvideo></Cardvideo>
               <Cardvideo></Cardvideo>
            </ul>
          </div>
        </div>

        
      </div>
      
    );
  }
  
  export default Cards;