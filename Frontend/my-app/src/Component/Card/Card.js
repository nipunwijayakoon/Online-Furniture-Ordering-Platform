import React from 'react';
import './Card.css';
import CardItem from './Cardim';

function Cards() {
    return (
      <div className='cards'>
        <h1>You can make orders or buildup own ideas through this!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-1.jpg'
                text='Latest Furniture Design'
                label='Veiw More'
                path='/services'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Populer Furniture Design'
                label='Veiw More'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Special master bed room  and bed room furnitures'
                label='Veiw More'
                path='/services'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Specail home and event, party and function funitures'
                label='Veiw More'
                path='/products'
              />
              <CardItem
                src='images/img-5.jpg'
                text='Special wall art, floor art, window art and table and chair art'
                label='Veiw More'
                path='/sign-up'
              />

               <CardItem
                src='images/img-6.jpg'
                text='Special chair, table and furnitures and furnitures for guests'
                label='Veiw More'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;