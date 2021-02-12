import React from 'react';
import './Cardmini1.css';
import CardItem from './Cardimmin';

function Cards() {
    return (
      <div className='card'>
        
        <div className='card__container'>
          <div className='card__wrapper'>
            <ul className='card__items'>
              <CardItem
                src='images/img-1.jpg'

                text='Latest Furniture Design'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Populer Furniture Design'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-2.jpg'
                text='Populer Furniture Design'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-5.jpg'
                text='Special wall art, floor art, window art and table and chair art'
                label='Order now'
                path='/products'
              />
            </ul>
            <ul className='card__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Special master bed room  and bed room furnitures'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Specail home and event, party and function funitures'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-5.jpg'
                text='Special wall art, floor art, window art and table and chair art'
                label='Order now'
                path='/products'
              />

               <CardItem
                src='images/img-6.jpg'
                text='Special chair, table and furnitures and furnitures for guests'
                label='Order now'
                path='/products'
              />
            </ul>
            <ul className='card__items'>
              <CardItem
                src='images/img-3.jpg'
                text='Special master bed room  and bed room furnitures'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-4.jpg'
                text='Specail home and event, party and function funitures'
                label='Order now'
                path='/products'
              />
              <CardItem
                src='images/img-5.jpg'
                text='Special wall art, floor art, window art and table and chair art'
                label='Order now'
                path='/products'
              />

               <CardItem
                src='images/img-6.jpg'
                text='Special chair, table and furnitures and furnitures for guests'
                label='Order now'
                path='/products'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;